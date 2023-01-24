import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface NavbarItemProps extends Pick<any, 'to'> {
  icon: React.ReactNode;
  text: string;
  to: string;
}

export const NavbarItem = (props: NavbarItemProps) => {
  const router = useRouter();

  const isSelected =
    props.to === router.pathname || router.pathname.startsWith(`${props.to}/`);

  return (
    <Link
      className={clsx(
        'flex items-center underlined whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none px-[1rem] py-[0.5rem] hover:bg-[#E2E8F0] transition-all',
        {
          'active text-black border-[#f0b90b] border-l-4 bg-[#ffeeaa]  bg-opacity-30':
            isSelected,
          'text-[#2B2F36]': !isSelected,
        },
      )}
      href={props.to}>
      {props.icon}
      <span className="ml-2">{props.text}</span>
    </Link>
  );
};
