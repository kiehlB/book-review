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

const TestNavbar = ({
  primaryItems,
  secondaryItems,
  className,
  isDisabled,
}: NavbarProps) => (
  <nav className={clsx('w-[240px] border-2 rounded-lg py-[1rem]', className)}>
    <ul>
      {primaryItems.map(itemProps => (
        <li key={itemProps.text}>
          <NavbarItem {...itemProps} />
        </li>
      ))}
    </ul>

    <div className="border"></div>
    <ul className="flex">
      <div className="flex items-center underlined whitespace-nowrap text-lg font-medium px-[1rem] py-[0.5rem] transition-all">
        Trending tags
      </div>
      <Trending />
    </ul>
  </nav>
);

export default TestNavbar;
