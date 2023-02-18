import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './NavMenuItem';
import { useSelector } from 'react-redux';
import useLogout from '../auth/hooks/useLogout';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const { auth } = useSelector((state: any) => state.auth);
  const { handleSubmitLogout } = useLogout();

  const itemIds = [
    {
      id: 1,
      text: 'Home',
      link: '/',
    },
    {
      id: 2,
      text: 'Search',
      link: '/serach',
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
      text: 'Search',
      link: '/search',
    },
    {
      id: 3,
      text: 'Logout',
      link: '/',
      onClick: handleSubmitLogout,
    },
  ];

  return (
    <motion.ul variants={variants} className="absolute top-24 z-[600] px-4">
      {auth?.username
        ? MobileitemIds.map(i => <MenuItem i={i} key={i.id} />)
        : itemIds.map(i => <MenuItem i={i} key={i.id} />)}
    </motion.ul>
  );
};
