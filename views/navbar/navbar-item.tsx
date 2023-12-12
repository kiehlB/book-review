'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect, useState } from 'react';

export interface NavbarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  sub?: string[];
}

export const NavbarItem = (props: NavbarItemProps) => {
  const pathname = usePathname();
  const isSelected =
    props.to === pathname ||
    pathname.startsWith(`${props.to}/`) ||
    (props.sub &&
      props.sub.some(path => pathname === path || pathname.startsWith(`${path}/`)));

  const [iconAndTextWidth, setIconAndTextWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);
  const iconAndTextRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (iconAndTextRef.current) {
      const newWidth = iconAndTextRef.current.getBoundingClientRect().width;
      setIconAndTextWidth(newWidth);
    }
    if (textRef.current) {
      const newHeight = textRef.current.getBoundingClientRect().height;
      setTextHeight(newHeight);
    }
  }, [props.text, props.icon]);

  return (
    <Link
      className={clsx(
        'underlined hover:text-team-current focus:text-team-current relative my-[0.5rem] flex items-center whitespace-nowrap py-[0.5rem] text-lg font-semibold transition-all focus:outline-none',
        {
          'active rounded text-default hover:pl-2 dark:text-white': isSelected,
          'text-[#495057] transition-all hover:pl-2 dark:text-dark-100': !isSelected,
        },
      )}
      href={props.to}>
      <span className={clsx('relative flex items-center')} ref={iconAndTextRef}>
        {props.icon}
        <span className="ml-2" ref={textRef}>
          {props.text}
        </span>
        {isSelected && (
          <span
            className="absolute bg-[#FFF23080] dark:bg-dark-300"
            style={{
              height: '12px',
              width: iconAndTextWidth,
              top: textHeight / 2 + 3,
              zIndex: -1,
            }}
          />
        )}
      </span>
    </Link>
  );
};
