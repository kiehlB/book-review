import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './NavMenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className="absolute top-24 z-[600] px-4">
    {itemIds.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'See All Post',
    link: '/filter',
  },
  {
    id: 3,
    text: 'Glossaries',
    link: '/',
  },
  {
    id: 4,
    text: 'Regsiter',
    link: '/signup',
  },
  {
    id: 5,
    text: 'Login',
    link: '/signin',
  },
];
