import * as React from 'react';
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  visible?: boolean;
  onClose?: (visible: boolean) => void;
  children?: React.ReactNode;
  className: string;
}

const Modal: React.FC<ModalProps> = ({ visible, children, onClose, className }) => {
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
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-[#00000080] mms:h-full mms:w-full mms:flex-1 mms:overflow-y-scroll mms:bg-[#fff]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          variants={backdropVariants}>
          <motion.div
            variants={modalVariants}
            className={`${className} flex bg-[#fff] shadow-md mms:h-full mms:w-auto mms:flex-1 mms:shadow-none`}>
            <div className="flex flex-1 flex-col dark:bg-dark-500 mms:bg-[#fff]">
              <div className="flex justify-end p-[1.5rem] mms:mb-0">
                <MdClose onClick={closeModal} tabIndex={1} size={24} color="#868E96" />
              </div>
              <div className="flex flex-1 flex-col dark:bg-dark-500 mms:bg-[#fff]">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
