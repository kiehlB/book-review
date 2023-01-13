import React, { useEffect, useRef, useState } from 'react';
import { MdTrendingUp, MdAccessTime } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import useToggle from '../../hooks/useToggle';
import Link from 'next/link';
import { AnimateSharedLayout, motion } from 'framer-motion';

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
    <AnimateSharedLayout>
      <nav className="flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <div className="mr-6 sm:mr-8 flex flex-col relative">
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
      </nav>
    </AnimateSharedLayout>
  );
}

export default HomeTab;