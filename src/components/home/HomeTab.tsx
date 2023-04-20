import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ActivityDateRangePicker from '../datePicker/DateRange';

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
  const router = useRouter();

  const stopPropagation = e => {
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
            if (isActiveLink(href, router.pathname)) {
              stopPropagation(e);
            }
          }}>
          <div className="ml-4 flex flex-col relative text-base font-semibold text-[#181A20] dark:text-[#e4e5e7]">
            <div className="flex items-center">
              <div
                className={`${
                  router.pathname == href
                    ? 'text-[#FFA500]'
                    : 'text-[#4b4b4b] dark:text-[#CFCFCF]'
                } mr-1.5`}>
                {svg}
              </div>
              <div
                className={`${
                  router.pathname == href
                    ? 'text-[#FFA500]'
                    : 'text-[#4b4b4b] dark:text-[#CFCFCF]'
                }`}>
                {name}
              </div>
            </div>
            {isActiveLink(href, router.pathname) && (
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
