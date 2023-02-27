import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface NavbarItemProps extends Pick<any, 'to'> {
  icon: React.ReactNode;
  text: string;
  to: string;
  sub?: any;
}

export const NavbarItem = (props: NavbarItemProps) => {
  const router = useRouter();

  const isSelected =
    props.to === router.pathname ||
    router.pathname.startsWith(`${props.to}/`) ||
    (props.sub && props?.sub?.indexOf(router.pathname) > -1);

  return (
    <Link
      className={clsx(
        'flex items-center underlined whitespace-nowrap text-lg font-semibold hover:text-team-current focus:text-team-current focus:outline-none px-[0.5rem] my-[0.5rem] py-[0.5rem] hover:text-[#212529] transition-all dark:text-[#e4e5e7]',
        {
          'active text-[#212529] border-[#FCD535] border-l-4 bg-[#ffffd1] bg-opacity-40 dark:bg-[#54565F33] dark:border-[#54565F33] hover:bg-[#FFF17F] dark:hover:bg-[#54565f80]':
            isSelected,
          'text-[#495057] pl-3 transition-all hover:pl-5': !isSelected,
        },
      )}
      href={props.to}>
      {props.icon}
      <span className="ml-2">{props.text}</span>
    </Link>
  );
};
