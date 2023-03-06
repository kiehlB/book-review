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
  link: string;
  onClick?: ((e: React.MouseEvent<HTMLLIElement>) => Promise<void>) | (() => void);
};

export function MenuItem({ id, text, link, onClick }: MenuItemProps) {
  const style = { border: `2px solid ${colors[id]}` };

  return (
    <div>
      {link ? (
        <Link href={link}>
          <motion.li
            onClick={onClick || (() => {})}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="se">
            <div className="icon-placeholder" style={style} />
            <div className="text-white">{text}</div>
          </motion.li>
        </Link>
      ) : (
        <motion.li
          onClick={onClick || (() => {})}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="se">
          <div className="icon-placeholder" style={style} />
          <div className="text-white">{text}</div>
        </motion.li>
      )}
    </div>
  );
}
