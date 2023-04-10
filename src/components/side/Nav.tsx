import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './NavMenuItem';
import { useSelector } from 'react-redux';
import useLogout from '../auth/hooks/useLogout';
import { RootState } from '../../store/rootReducer';

type Dispatch<A> = (value: A) => void;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export type SidebarProps = {
  SetBookIsClose: Dispatch<React.SetStateAction<boolean>>;
  BookIsClose: boolean;
};

export function Navigation({ SetBookIsClose, BookIsClose }: SidebarProps) {
  const { auth } = useSelector((state: RootState) => state.auth);
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
      text: 'Write',
      onClick: () => SetBookIsClose(!BookIsClose),
    },
    {
      id: 3,
      text: 'Search',
      link: '/search',
    },
    {
      id: 4,
      text: 'Logout',
      link: '/',
      onClick: handleSubmitLogout,
    },
  ];

  return (
    <motion.ul variants={variants} className="absolute top-24 z-[600] px-4">
      {auth?.username
        ? MobileitemIds.map(({ id, text, link, onClick }) => (
            <MenuItem id={id} text={text} link={link} onClick={onClick} key={id} />
          ))
        : itemIds.map(({ id, text, link }) => (
            <MenuItem id={id} text={text} link={link} key={id} />
          ))}
    </motion.ul>
  );
}
