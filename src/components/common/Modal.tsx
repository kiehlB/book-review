import * as React from 'react';
import { MdClose } from 'react-icons/md';

const { useState, useEffect } = React;

interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
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
    <div>
      <div className="wrapper">
        <div className="white-block">
          <div className="exit-wrapper">
            <MdClose onClick={onClose} tabIndex={1} />
          </div>
          <div className="block-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
