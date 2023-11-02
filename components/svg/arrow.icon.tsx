import clsx from 'clsx';
import * as React from 'react';

export interface ArrowIconProps {
  direction: 'up' | 'right' | 'down' | 'left' | 'top-right';
  size?: number;
  className?: string;
}

function ArrowIcon({ direction, size = 28, className }: ArrowIconProps) {
  const getRotationValue = direction => {
    switch (direction) {
      case 'up':
        return 180;
      case 'right':
        return -90;
      case 'down':
        return 0;
      case 'left':
        return 90;
      case 'top-right':
        return -135;
      default:
        return 0;
    }
  };

  const transform = `rotate(${getRotationValue(direction)}deg)`;
  return (
    <svg
      className={clsx(className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
        fill="currentColor"
      />
    </svg>
  );
}
export { ArrowIcon };
