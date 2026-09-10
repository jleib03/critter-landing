import React from 'react';
import { Dog } from 'lucide-react';

interface TogoIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'width' | 'height'> {
  size?: number;
  color?: string;
}

/** Matches the current Togo widget's Dog outline in Critter Hub. */
export function TogoIcon({
  className = '',
  size = 24,
  color = 'currentColor',
  ...props
}: TogoIconProps) {
  const labelled = Boolean(props['aria-label'] || props['aria-labelledby']);
  return <Dog
    size={size}
    color={color}
    className={className}
    aria-hidden={labelled ? undefined : true}
    role={labelled ? 'img' : undefined}
    {...props}
  />;
}

/** Compatibility export: small displays use the same recognizable outline. */
export function TogoIconFilled(props: TogoIconProps) {
  return <TogoIcon {...props} />;
}

export function TogoAvatar({
  className = '',
  size = 40,
  'aria-label': label,
}: Omit<TogoIconProps, 'color'>) {
  return (
    <div
      className={`rounded-full bg-gradient-to-br from-critter-orange to-amber-500 p-1 ${className}`}
      style={{ width: size, height: size }}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
        <TogoIcon size={size * 0.7} color="#E75837" />
      </div>
    </div>
  );
}

export default TogoIcon;
