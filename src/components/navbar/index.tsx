import clsx from 'clsx';
import React from 'react';
import Trending from '../../svg/trending';
import { NavbarItem, NavbarItemProps } from './NavbarItem';

interface NavbarProps {
  primaryItems?: NavbarItemProps[];
  secondaryItems?: NavbarItemProps[];
  className?: string;
  isDisabled?: boolean;
}

const Navbar = ({ primaryItems, secondaryItems, className, isDisabled }: NavbarProps) => (
  <div className={clsx('w-[80%] mxl:w-[90%]', className)}>
    <ul>
      {primaryItems.map(itemProps => (
        <li key={itemProps.text}>
          <NavbarItem {...itemProps} />
        </li>
      ))}
    </ul>
    {secondaryItems ? (
      <ul className="flex mb-2">
        <div className="flex items-center underlined whitespace-nowrap text-base font-bold py-[0.5rem] transition-all text-[#334155] pl-3 dark:text-[#e4e5e7]">
          Trending tags
        </div>
        <Trending className="w-[20px] ml-2" />
      </ul>
    ) : (
      ''
    )}
  </div>
);

export default Navbar;
