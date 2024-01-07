'use client';

import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';
import React, { SetStateAction, useEffect, useRef } from 'react';
import { SideMenu } from './side-menu';
import MenuToggle from '@/components/framer-menu-toggle';
import { useTheme } from 'next-themes';

export type SidebarProps = {
  SetBookClose: () => void;
  BookIsClose: boolean;
  getUser: string | undefined;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 0px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar({ SetBookClose, BookIsClose, getUser }: SidebarProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  React.useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'initial';
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={clsx('bottom-0 left-0 top-0 flex flex-1', {
        'fixed z-[11] flex': isOpen == true,
        'z[-1] flex': isOpen == false,
      })}>
      <div className={isOpen ? '' : 'hidden'}>
        <motion.div
          variants={sidebar}
          className="absolute bottom-0 left-0 top-0 z-[400]  w-[320px] bg-black mxs:w-[100vw]"
        />
        <SideMenu
          toggleOpen={toggleOpen}
          BookIsClose={BookIsClose}
          SetBookClose={SetBookClose}
          getUser={getUser}
        />
      </div>
      <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default Sidebar;
