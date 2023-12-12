'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF', '#4422AA'];

export type MenuItemProps = {
  id: number;
  text: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  toggleOpen: () => void;
};

export function SideMenuItem({ id, text, link, onClick, toggleOpen }: MenuItemProps) {
  const style = { border: `2px solid ${colors[id]}` };

  if (link) {
    return (
      <Link href={link}>
        <motion.div
          onClick={toggleOpen}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="se">
          <div className="icon-placeholder" style={style} />
          <div className="text-white">{text}</div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      onClick={toggleOpen}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="se">
      <div className="icon-placeholder" style={style} />
      <div className="text-white">{text}</div>
    </motion.div>
  );
}
