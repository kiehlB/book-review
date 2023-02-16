import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdTrendingUp, MdAccessTime, MdOutlineLocalFireDepartment } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';

export type HomeTabProps = {};

export const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === '/') {
    return href === currentPathname;
  }

  return currentPathname.startsWith(href);
};

const links: { name: string; href: string; svg: any }[] = [
  {
    svg: <IoMdTime />,
    name: '최신',
    href: '/',
  },
  {
    svg: <MdOutlineLocalFireDepartment />,
    name: '트렌딩',
    href: '/trending',
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
      {links.map(({ name, href, svg }) => (
        <Link
          key={name}
          href={href}
          onClick={e => {
            if (isActiveLink(href, router.pathname)) {
              stopPropagation(e);
            }
          }}>
          <div className="ml-4 flex flex-col relative text-base font-semibold text-[#181A20] dark:text-[#e4e5e7] ">
            <div className="flex items-center">
              <div
                className={`${
                  router.pathname == href ? 'text-[#ffa000]' : 'text-[#4b4b4b]'
                } mr-2`}>
                {svg}{' '}
              </div>
              <div
                className={`${
                  router.pathname == href ? 'text-[#ffa000]' : 'text-[#4b4b4b]'
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

      <IoCalendarNumberOutline size={24} className="ml-6 dark:text-[#e4e5e7]" />
    </div>
  );
}

export default HomeTab;
