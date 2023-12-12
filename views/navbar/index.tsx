import clsx from 'clsx';
import React from 'react';
import { NavbarItem, NavbarItemProps } from './navbar-item';

interface NavbarProps {
  primaryItems: NavbarItemProps[];
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
      <ul className="mb-2 flex">
        <span className="underlined flex items-center whitespace-nowrap py-[0.5rem] text-base font-bold text-[#495057] transition-all dark:text-darkText">
          Trending tags
        </span>
      </ul>
    ) : (
      ''
    )}
  </div>
);

export default Navbar;
