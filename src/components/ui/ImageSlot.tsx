import type { CSSProperties } from 'react';
import { imageSpecs, resolveImage, type ImageKey } from '../../lib/images';

interface ImageSlotProps {
  imageKey: ImageKey;
  className?: string;
  /** Hero images should load eagerly with high priority */
  priority?: boolean;
  /** Override the manifest alt text */
  alt?: string;
  /** Decorative images get an empty alt */
  decorative?: boolean;
  sizes?: string;
  style?: CSSProperties;
  /** Fill the parent instead of using the intrinsic aspect ratio */
  fill?: boolean;
  /** Enables the GSAP clip-path reveal */
  reveal?: boolean;
}

/**
 * Renders a photograph from the manifest. If the file hasn't been added to
 * `src/assets/images/` yet, a neutral placeholder is shown instead of a broken
 * image (see src/lib/images.ts).
 */
export function ImageSlot({
  imageKey,
  className = '',
  priority,
  alt,
  decorative,
  sizes,
  style,
  fill,
  reveal,
}: ImageSlotProps) {
  const spec = imageSpecs[imageKey];
  const src = resolveImage(imageKey);
  const label = alt ?? spec.alt;
  const box: CSSProperties = fill
    ? { width: '100%', height: '100%', ...style }
    : { aspectRatio: `${spec.width} / ${spec.height}`, width: '100%', ...style };

  if (!src) {
    return (
      <div
        className={`img-slot img-slot--fallback ${className}`}
        style={box}
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative ? true : undefined}
        data-image-key={imageKey}
      >
        {!decorative && <span className="img-slot__caption">{label}</span>}
      </div>
    );
  }

  return (
    <div className={`img-slot ${className}`} style={box} data-mask={reveal ? '' : undefined}>
      <img
        src={src}
        alt={decorative ? '' : label}
        width={spec.width}
        height={spec.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
      />
    </div>
  );
}
