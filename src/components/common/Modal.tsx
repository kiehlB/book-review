import * as React from 'react';
import { MdClose } from 'react-icons/md';

const { useState, useEffect } = React;

interface ModalProps {
  visible?: boolean;
  onClose?: any;
  children?: any;
}

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 backdrop-brightness-75">
      <div className="w-[616px] h-[616px] flex shadow-md">
        <div className="flex-1 bg-[#fff] flex flex-col">
          <div className="flex justify-end  p-[1.5rem]">
            <MdClose
              onClick={() => onClose(!visible)}
              tabIndex={1}
              size={24}
              color="#868E96"
            />
          </div>
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
