import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


const navy = new THREE.Color('#18334b');
const steel = new THREE.Color('#c9d3dd');
const rust = new THREE.Color('#a43c25');

/** Simplified, stylised outdoor condenser — generated procedurally, no external model file. */
function Condenser({ active, spin }: { active: string | null; spin: boolean }) {
  const fan = useRef<THREE.Group>(null);
  const invalidate = useThree((s) => s.invalidate);

  // Fan blades spin only while the scene is being looked at & motion is allowed.
  useFrame((_, dt) => {
    if (spin && fan.current) {
      fan.current.rotation.y += dt * 4;
      invalidate();
    }
  });

  const slats = useMemo(() => Array.from({ length: 14 }, (_, i) => -0.8 + i * 0.123), []);
  const blades = useMemo(() => [0, 1, 2, 3, 4], []);

  return (
    <group position={[0, -0.6, 0]}>
      {/* cabinet */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[2.0, 1.3, 1.6]} />
        <meshStandardMaterial color={steel} metalness={0.35} roughness={0.55} />
      </mesh>
      {/* coil fins (front/back/sides) as slats */}
      {slats.map((z) => (
        <mesh key={z} position={[1.02, 0.65, z]}>
          <boxGeometry args={[0.03, 1.12, 0.045]} />
          <meshStandardMaterial color={active === 'coil' ? rust : navy} roughness={0.7} />
        </mesh>
      ))}
      {slats.map((z) => (
        <mesh key={`b${z}`} position={[-1.02, 0.65, z]}>
          <boxGeometry args={[0.03, 1.12, 0.045]} />
          <meshStandardMaterial color={navy} roughness={0.7} />
        </mesh>
      ))}
      {/* top grille ring */}
      <mesh position={[0, 1.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.62, 0.03, 12, 48]} />
        <meshStandardMaterial color={navy} />
      </mesh>
      {/* fan */}
      <group ref={fan} position={[0, 1.22, 0]}>
        {blades.map((i) => (
          <mesh key={i} rotation={[0, (i * Math.PI * 2) / blades.length, 0]} position={[0.28, 0, 0]}>
            <boxGeometry args={[0.5, 0.012, 0.16]} />
            <meshStandardMaterial color={active === 'fan' ? rust : '#40586f'} />
          </mesh>
        ))}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.06, 20]} />
          <meshStandardMaterial color={navy} />
        </mesh>
      </group>
      {/* control panel */}
      <mesh position={[-0.9, 0.35, 0.82]}>
        <boxGeometry args={[0.32, 0.4, 0.04]} />
        <meshStandardMaterial color={active === 'cap' ? rust : '#8095a8'} />
      </mesh>
      {/* line set */}
      <mesh position={[-0.2, 0.15, -0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 14]} />
        <meshStandardMaterial color={active === 'lines' ? rust : '#b87333'} metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0.05, 0.15, -0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.5, 14]} />
        <meshStandardMaterial color={active === 'lines' ? rust : '#b87333'} metalness={0.6} roughness={0.35} />
      </mesh>
      {/* pad */}
      <mesh position={[0, -0.04, 0]}>
        <boxGeometry args={[2.3, 0.08, 1.9]} />
        <meshStandardMaterial color="#9aa3ab" roughness={0.9} />
      </mesh>
    </group>
  );
}

/** Re-renders on demand only (frameloop="demand") — idle scenes cost nothing. */
function Controls({ reduce }: { reduce: boolean }) {
  const invalidate = useThree((s) => s.invalidate);
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableDamping={!reduce}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2.1}
      onChange={() => invalidate()}
    />
  );
}

interface CondenserSceneProps {
  active: string | null;
  onContextLost: () => void;
}

export default function CondenserScene({ active, onContextLost }: CondenserSceneProps) {
  const [reduce, setReduce] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Pause the spin loop when scrolled out of view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.75]}
        camera={{ position: [3.1, 1.9, 3.4], fov: 38 }}
        gl={{ antialias: true, powerPreference: 'low-power' }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            onContextLost();
          });
        }}
      >
        <color attach="background" args={['#f0f4f8']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.4} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <Condenser active={active} spin={!reduce && visible} />
        <Controls reduce={reduce} />
      </Canvas>
    </div>
  );
}
