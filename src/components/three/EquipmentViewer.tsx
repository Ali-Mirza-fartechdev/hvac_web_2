import { lazy, Suspense, useState, type ReactNode } from 'react';
import { Icon } from '../ui/Icon';
import { hotspots } from './hotspots';

const CondenserScene = lazy(() => import('./CondenserScene'));

interface EquipmentViewerProps {
  /** Static photo shown by default, and whenever WebGL is unavailable */
  fallback: ReactNode;
  caption: string;
  label: string;
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/**
 * Shows the Figma photograph by default. Visitors can opt in to an interactive 3D
 * outdoor-unit explorer; Three.js / R3F are only downloaded at that moment.
 * Falls back to the photo if WebGL is missing or the GL context is lost.
 */
export function EquipmentViewer({ fallback, caption, label }: EquipmentViewerProps) {
  const [mode, setMode] = useState<'photo' | '3d'>('photo');
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const open3d = () => {
    if (!hasWebGL()) {
      setFailed(true);
      return;
    }
    setMode('3d');
  };

  const show3d = mode === '3d' && !failed;
  const current = hotspots.find((h) => h.id === active);

  return (
    <div className="viewer">
      <div className="photo-frame viewer__frame">
        {show3d ? (
          <div className="viewer__canvas" role="group" aria-label="Interactive 3D outdoor unit. Drag to rotate.">
            <Suspense fallback={<div className="viewer__loading">Loading 3D view…</div>}>
              <CondenserScene active={active} onContextLost={() => setFailed(true)} />
            </Suspense>
          </div>
        ) : (
          fallback
        )}
        {!show3d && (
          <div className="photo-frame__badge">
            <div className="photo-frame__badge-main">
              <Icon name="gauge" size={18} />
              <div>
                <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</strong>
                <span className="sub">{caption}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {failed && (
        <p className="small viewer__note" role="status">
          The 3D view isn’t available on this device — the photo above shows the same inspection.
        </p>
      )}

      {!failed && (
        <div className="viewer__controls">
          {show3d ? (
            <>
              <div className="viewer__chips" role="group" aria-label="Inspection points">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    className="viewer__chip"
                    aria-pressed={active === h.id}
                    onClick={() => setActive(active === h.id ? null : h.id)}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
              <p className="small viewer__detail" aria-live="polite">
                {current ? current.detail : 'Drag to rotate the outdoor unit, or pick an inspection point.'}
              </p>
              <button type="button" className="viewer__toggle" onClick={() => setMode('photo')}>
                Back to photo
              </button>
            </>
          ) : (
            <button type="button" className="viewer__toggle" onClick={open3d}>
              <Icon name="eye" size={15} /> Explore the outdoor unit in 3D
            </button>
          )}
        </div>
      )}
    </div>
  );
}
