import * as React from 'react';
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  visible?: boolean;
  onClose?: (visible) => void;
  children?: React.ReactNode;
  className: string;
}

const ulVariants = {
  open: {
    display: '',

    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: 'none',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const liVariants = {
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

const Modal: React.FC<ModalProps> = ({ visible, children, onClose, className }) => {
  React.useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';
  }, [visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[1000] bg-[#00000080]  mmx:flex-1 mmx:w-full mmx:h-full mmx:overflow-y-scroll mmx:bg-[#fff]"
      initial={{ display: 'none' }}
      animate={visible ? 'open' : 'closed'}
      variants={ulVariants}>
      <motion.div
        variants={liVariants}
        className={`${className} flex shadow-md bg-[#fff] mmx:flex-1 mmx:w-auto mmx:h-full dark:bg-[#1a1b1e] mmx:shadow-none`}>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-end p-[1.5rem] mmx:mb-0">
            <MdClose
              onClick={() => onClose(!visible)}
              tabIndex={1}
              size={24}
              color="#868E96"
            />
          </div>
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
