'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SideMenuItem } from './side-menu-item';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export type SideMenuProps = {
  SetBookClose: () => void;
  BookIsClose: boolean;
  getUser: string | undefined;
  toggleOpen: () => void;
};

type MenuItem = {
  id: number;
  text: string;
  link?: string;
  onClick?: () => void;
};

export function SideMenu({
  SetBookClose,
  BookIsClose,
  getUser,
  toggleOpen,
}: SideMenuProps) {
  const itemIds: MenuItem[] = [
    {
      id: 1,
      text: 'Home',
      link: '/',
    },
    {
      id: 2,
      text: '게시판',
      link: '/dashboard',
    },
    {
      id: 3,
      text: '태그',
      link: '/tags',
    },
  ];

  const MobileitemIds = [
    {
      id: 1,
      text: 'Home',
      link: '/',
    },
    {
      id: 2,
      text: '게시판',
      link: '/dashboard',
    },
    {
      id: 3,
      text: '태그',
      link: '/tags',
    },
  ];

  const itemsToShow = getUser ? MobileitemIds : itemIds;
  return (
    <motion.div variants={variants} className="absolute top-24 z-[600] px-4">
      {itemsToShow.map(({ id, text, link }) => (
        <SideMenuItem id={id} text={text} link={link} key={id} toggleOpen={toggleOpen} />
      ))}
    </motion.div>
  );
}
