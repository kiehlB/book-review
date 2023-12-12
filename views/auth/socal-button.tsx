import Link from 'next/link';
import React, { ReactNode, MouseEvent } from 'react';

interface SocialButtonProps {
  href?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
  bgColor?: string;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  onClick,
  children,
  bgColor = 'bg-white',
  className,
}) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <div
          className={`${className} flex h-[50px] w-[50px] transform cursor-pointer items-center justify-center rounded-full ${bgColor} transition-all duration-500 ease-in-out hover:hover:translate-y-[-5px] hover:shadow-md`}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${className} flex h-[50px] w-[50px] transform cursor-pointer items-center justify-center rounded-full ${bgColor} transition-all duration-500 ease-in-out hover:hover:translate-y-[-5px] hover:shadow-md`}>
      {children}
    </div>
  );
};

export default SocialButton;
