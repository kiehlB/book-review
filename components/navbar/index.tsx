import clsx from 'clsx';
import React from 'react';
import { NavbarItem, NavbarItemProps } from './navbar-item';
import Trending from '@/svg/trending';

interface NavbarProps {
  primaryItems: NavbarItemProps[];
  secondaryItems?: NavbarItemProps[];
  className?: string;
  isDisabled?: boolean;
}

const Navbar = ({ primaryItems, secondaryItems, className, isDisabled }: NavbarProps) => (
  <div className={clsx('mxl:w-[90%] w-[80%]', className)}>
    <ul>
      {primaryItems.map(itemProps => (
        <li key={itemProps.text}>
          <NavbarItem {...itemProps} />
        </li>
      ))}
    </ul>
    {secondaryItems ? (
      <ul className="mb-2 flex">
        <span className="underlined flex items-center whitespace-nowrap py-[0.5rem] pl-3 text-base font-bold text-[#334155] transition-all dark:text-[#e4e5e7]">
          Trending tags
        </span>
        {/* <Trending className="ml-2 w-[20px]" /> */}
      </ul>
    ) : (
      ''
    )}
  </div>
);

export default Navbar;
