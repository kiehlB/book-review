import * as React from 'react';
import styled, { css } from 'styled-components';
import transitions from '../../lib/transitions';
import { motion } from 'framer-motion';

interface PopupProps {
  visible: boolean;
  children: React.ReactElement;
}

const { useState, useEffect } = React;

const Popup: React.FC<PopupProps> = ({ visible, children }) => {
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
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="fixed top-0 left-0 w-full h-full z-[10] bg-[#000000d9]" />
      <div className="fixed top-0 left-0 w-full h-full z-[10] flex justify-center items-center">
        <div className="w-[25rem] bg-white shadow px-[2rem] py-[1.5rem] transition-all">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
