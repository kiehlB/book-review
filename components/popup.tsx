'use client';

import * as React from 'react';
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
      <div className="fixed left-0 top-0 z-[10] h-full w-full bg-[#000000d9]" />
      <div className="fixed left-0 top-0 z-[10] flex h-full w-full items-center justify-center">
        <div className="w-[25rem] bg-white px-[2rem] py-[1.5rem] shadow transition-all">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
