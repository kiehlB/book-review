'use client';

import React from 'react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ActivityDateRangePicker from '../date-picker/date-range';

export type TabProps = {
  svg: React.ReactNode;
  name: string;
  href: string;
};

export type HomeTabProps = {
  primaryItems: TabProps[];
};

export const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === '/') {
    return href === currentPathname;
  }

  return currentPathname.startsWith(href);
};

function HomeTab({ primaryItems }: HomeTabProps) {
  const pathname = usePathname();

  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <nav className="flex items-center">
      {primaryItems.map(({ name, href, svg }) => (
        <Link
          key={name}
          href={href}
          onClick={e => {
            if (isActiveLink(href, pathname)) {
              stopPropagation(e);
            }
          }}>
          <div className="relative ml-4 flex flex-col text-base font-semibold text-[#181A20] dark:text-[#e4e5e7]">
            <div className="flex items-center">
              <div
                className={`${
                  pathname == href
                    ? 'text-[#FFA500]'
                    : 'text-[#4b4b4b] dark:text-[#CFCFCF]'
                } mr-1.5`}>
                {svg}
              </div>
              <div
                className={`${
                  pathname == href
                    ? 'text-[#FFA500]'
                    : 'text-[#4b4b4b] dark:text-[#CFCFCF]'
                }`}>
                {name}
              </div>
            </div>
            {isActiveLink(href, pathname) && (
              <motion.div
                layoutId="navigation-underline"
                className="navigation-underline"
                animate
              />
            )}
          </div>
        </Link>
      ))}

      <ActivityDateRangePicker />
    </nav>
  );
}

export default HomeTab;
