import { icons, type IconName } from './icons';

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Decorative by default; pass a label for meaningful icons */
  label?: string;
}

export function Icon({ name, size = 16, strokeWidth = 2, className, label }: IconProps) {
  const Cmp = icons[name];
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      focusable="false"
    />
  );
}
