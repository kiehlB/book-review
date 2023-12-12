'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ActivityDateRangePicker from '../date-picker/date-range';

interface TabProps {
  svg: React.ReactNode;
  name: string;
  href: string;
}

interface HomeTabProps {
  primaryItems: TabProps[];
}

const isActiveLink = (href: string, currentPathname: string): boolean => {
  return href === '/' ? href === currentPathname : currentPathname.startsWith(href);
};

const TabItem: React.FC<TabProps & { pathname: string }> = ({
  name,
  href,
  svg,
  pathname,
}) => {
  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isActiveLink(href, pathname)) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  const isActive = isActiveLink(href, pathname);
  const textColor = isActive ? 'text-[#FFA500]' : 'text-[#4b4b4b] dark:text-[#CFCFCF]';

  return (
    <Link href={href} onClick={stopPropagation}>
      <div className="relative ml-4 flex flex-col text-base font-semibold text-[#181A20] dark:text-[#e4e5e7]">
        <div className="flex items-center">
          <div className={`${textColor} mr-1.5`}>{svg}</div>
          <p className={textColor}>{name}</p>
        </div>
        {isActive && (
          <motion.div
            layoutId="navigation-underline"
            className="navigation-underline"
            animate
          />
        )}
      </div>
    </Link>
  );
};

const HomeTab: React.FC<HomeTabProps> = ({ primaryItems }) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      {primaryItems.map(item => (
        <TabItem key={item.name} {...item} pathname={pathname} />
      ))}
      <ActivityDateRangePicker />
    </nav>
  );
};

export default HomeTab;
