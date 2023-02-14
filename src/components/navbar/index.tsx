import clsx from 'clsx';
import React from 'react';
import Trending from '../../svg/trending';
import { NavbarItem, NavbarItemProps } from './NavbarItem';

interface NavbarProps {
  primaryItems: NavbarItemProps[];
  secondaryItems: NavbarItemProps[];
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

    <ul className="flex mb-4">
      <div className="flex items-center underlined whitespace-nowrap text-base font-bold py-[0.5rem] transition-all text-[#334155]">
        Trending tags
      </div>
      <Trending className="w-[20px]" />
    </ul>
  </div>
);

export default Navbar;
