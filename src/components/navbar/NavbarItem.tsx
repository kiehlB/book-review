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

  console.log(router.pathname);

  return (
    <Link
      className={clsx(
        'flex items-center underlined whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none',
        {
          'active text-red-400': isSelected,
          'text-secondary': !isSelected,
        },
      )}
      href={props.to}>
      {props.icon}
      <span>{props.text}</span>
    </Link>
  );
};
