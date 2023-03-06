import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';
import React, { SetStateAction, useEffect, useRef } from 'react';
import MenuToggle from '../common/FramerMenuToggle';
import { Navigation } from './Nav';

type Dispatch<A> = (value: A) => void;

export type SidebarProps = {
  SetBookIsClose: Dispatch<SetStateAction<boolean>>;
  BookIsClose: boolean;
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

function Sidebar({ SetBookIsClose, BookIsClose }: SidebarProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  React.useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'initial';
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={clsx('flex flex-1 top-0 left-0 bottom-0', {
        'fixed flex z-[11]': isOpen == true,
        'flex z[-1]': isOpen == false,
      })}>
      <div className={isOpen ? '' : 'hidden'}>
        <motion.div
          variants={sidebar}
          className="absolute top-0 left-0 w-[320px] mxs:w-[100vw]  bg-black z-[400] bottom-0"
        />
        <Navigation BookIsClose={BookIsClose} SetBookIsClose={SetBookIsClose} />
      </div>
      <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default Sidebar;
