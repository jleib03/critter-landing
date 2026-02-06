/**
 * TogoIcon - Friendly Husky Face
 *
 * The visual identity for Togo, the Critter AI companion.
 * Inspired by the legendary Iditarod sled dog.
 */

import React from 'react';

interface TogoIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function TogoIcon({
  className = '',
  size = 24,
  color = 'currentColor'
}: TogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Soft rounded ears - friendly husky style */}
      <ellipse
        cx="5"
        cy="7"
        rx="2.5"
        ry="3.5"
        fill={color}
        opacity="0.3"
      />
      <ellipse
        cx="19"
        cy="7"
        rx="2.5"
        ry="3.5"
        fill={color}
        opacity="0.3"
      />

      {/* Head shape */}
      <ellipse
        cx="12"
        cy="13"
        rx="8"
        ry="9"
        fill={color}
        opacity="0.15"
      />

      {/* Face mask (white area) */}
      <path
        d="M12 8C9 8 7 10 7 13C7 15 8 17 10 18L12 20L14 18C16 17 17 15 17 13C17 10 15 8 12 8Z"
        fill="white"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Eyes */}
      <circle cx="9.5" cy="12" r="1.5" fill={color} />
      <circle cx="14.5" cy="12" r="1.5" fill={color} />

      {/* Eye shine */}
      <circle cx="10" cy="11.5" r="0.5" fill="white" />
      <circle cx="15" cy="11.5" r="0.5" fill="white" />

      {/* Nose */}
      <ellipse cx="12" cy="15.5" rx="2" ry="1.5" fill={color} />

      {/* Nose shine */}
      <ellipse cx="11.5" cy="15" rx="0.5" ry="0.3" fill="white" opacity="0.6" />

      {/* Happy smile */}
      <path
        d="M9.5 17.5Q12 19 14.5 17.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * TogoIconFilled - Friendly dog face for small sizes
 */
export function TogoIconFilled({
  className = '',
  size = 24,
  color = 'currentColor'
}: TogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Soft rounded ears - floppy husky style */}
      <ellipse cx="5.5" cy="7" rx="3" ry="4" fill={color} opacity="0.85" />
      <ellipse cx="18.5" cy="7" rx="3" ry="4" fill={color} opacity="0.85" />

      {/* Head - rounded and friendly */}
      <circle cx="12" cy="13" r="9" fill={color} />

      {/* White face mask - husky pattern */}
      <path
        d="M12 6C8.5 6 6 9 6 12.5C6 15.5 8 18 11 19L12 20L13 19C16 18 18 15.5 18 12.5C18 9 15.5 6 12 6Z"
        fill="white"
      />

      {/* Eyes - friendly and happy */}
      <circle cx="9" cy="12" r="1.5" fill={color} />
      <circle cx="15" cy="12" r="1.5" fill={color} />

      {/* Eye shine for friendliness */}
      <circle cx="9.5" cy="11.5" r="0.5" fill="white" />
      <circle cx="15.5" cy="11.5" r="0.5" fill="white" />

      {/* Nose */}
      <ellipse cx="12" cy="15.5" rx="2" ry="1.3" fill={color} />

      {/* Happy smile */}
      <path
        d="M9.5 17.5Q12 19 14.5 17.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * TogoAvatar - Larger version for chat messages
 */
export function TogoAvatar({
  className = '',
  size = 40
}: Omit<TogoIconProps, 'color'>) {
  return (
    <div
      className={`rounded-full bg-gradient-to-br from-critter-orange to-amber-500 p-1 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
        <TogoIcon size={size * 0.7} color="#E75837" />
      </div>
    </div>
  );
}

export default TogoIcon;
