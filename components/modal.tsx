'use client';

import * as React from 'react';
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ModalProps {
  visible?: boolean;
  onClose?: (visible: any) => void;
  children?: React.ReactNode;
  className: string;
}

const Modal: React.FC<ModalProps> = ({ visible, children, onClose, className }) => {
  const router = useRouter();

  React.useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';
  }, [visible]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120,
      },
    },
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const closeModal = () => {
    onClose && onClose(!visible);
    router.back();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-[#00000080]  mmx:h-full mmx:w-full mmx:flex-1 mmx:overflow-y-scroll mmx:bg-[#fff]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          variants={backdropVariants}>
          <motion.div
            variants={modalVariants}
            className={`${className} flex bg-[#fff] shadow-md dark:bg-[#1a1b1e] mmx:h-full mmx:w-auto mmx:flex-1 mmx:shadow-none`}>
            <div className="flex flex-col flex-1">
              <div className="flex justify-end p-[1.5rem] mmx:mb-0">
                <MdClose onClick={closeModal} tabIndex={1} size={24} color="#868E96" />
              </div>
              <div className="flex flex-col flex-1">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
