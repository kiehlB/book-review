'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface NavbarItemProps extends Pick<any, 'to'> {
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

  return (
    <Link
      className={clsx(
        'underlined hover:text-team-current focus:text-team-current my-[0.5rem] flex items-center whitespace-nowrap px-[0.5rem] py-[0.5rem] text-lg font-semibold transition-all hover:text-[#212529] focus:outline-none dark:text-[#e4e5e7]',
        {
          'active rounded border-l-4 border-[#FCD535] bg-[#ffffd1] bg-opacity-40 text-[#212529] hover:bg-[#FFF17F] dark:border-[#54565F33] dark:bg-[#54565F33] dark:hover:bg-[#53525280]':
            isSelected,
          'pl-3 text-[#495057] transition-all hover:pl-5': !isSelected,
        },
      )}
      href={props.to}>
      {props.icon}
      <span className="ml-2">{props.text}</span>
    </Link>
  );
};
