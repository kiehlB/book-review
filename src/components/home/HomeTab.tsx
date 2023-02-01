import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdTrendingUp, MdAccessTime } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export type HomeTabProps = {};

export const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === '/') {
    return href === currentPathname;
  }

  return currentPathname.startsWith(href);
};

const links: { name: any; href: string }[] = [
  {
    name: '트렌딩',
    href: '/',
  },
  {
    name: '최신',
    href: '/blog',
  },
];

function HomeTab(props: HomeTabProps) {
  const router = useRouter();

  const stopPropagation = e => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <div className="flex">
      {links.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          onClick={e => {
            if (isActiveLink(href, router.pathname)) {
              stopPropagation(e);
            }
          }}>
          <div className="ml-6 flex flex-col relative text-base font-normal text-[#181A20] dark:text-[#e4e5e7]">
            {name}
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

      <IoCalendarNumberOutline size={24} className="ml-6 dark:text-[#e4e5e7]" />
    </div>
  );
}

export default HomeTab;
