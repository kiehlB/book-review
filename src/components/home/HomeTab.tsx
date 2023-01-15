import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdTrendingUp, MdAccessTime } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import useToggle from '../../hooks/useToggle';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ModalContext from '../../context/modalContext';

export type HomeTabProps = {};

export const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (href === '/') {
    return href === currentPathname;
  }

  return currentPathname.startsWith(href);
};

const links: { name: string; href: string }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
];

function HomeTab(props: HomeTabProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <nav className="flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <div className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {isActiveLink(href, router.pathname) && (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-[1px] border-2"
                  layoutId="underline"
                />
              )}
            </div>
          </Link>
        ))}
      </nav>
    </AnimatePresence>
  );
}

export default HomeTab;
