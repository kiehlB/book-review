import * as React from 'react';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import useModalStore from '@/store/modal';

interface BookModalProps {
  children?: React.ReactNode;
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

const BookModal: React.FC<BookModalProps> = ({ children }) => {
  const { bookIsClose, setBookClose } = useModalStore();

  React.useEffect(() => {
    document.body.style.overflowY = bookIsClose ? 'hidden' : 'initial';
  }, [bookIsClose]);

  return (
    <motion.div
      className={clsx(
        'fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-[#00000080] mxs:h-full mxs:w-full mxs:flex-1',
      )}
      initial={{ display: 'none' }}
      animate={bookIsClose ? 'open' : 'closed'}
      variants={ulVariants}>
      <motion.div
        variants={liVariants}
        className={`h-full w-full max-w-[80rem] bg-[#E9E9E9] dark:bg-dark-500 mxs:h-full mxs:w-auto mxs:flex-1`}>
        <div className="flex flex-1 flex-col bg-[#E9E9E9] py-4 dark:bg-dark-500">
          <div className="flex justify-end p-[1.5rem] mxs:mb-0 mxs:hidden">
            <MdClose
              onClick={() => setBookClose(!bookIsClose)}
              tabIndex={1}
              size={24}
              color="#868E96"
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookModal;
