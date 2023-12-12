'use client';

import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Popup from './popup';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,

      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const PopupOKCancelBlock = styled.div`
  h3 {
    margin: 0;
    font-size: 1.5rem;

    line-height: 1.5;
    font-weight: bold;
  }
  .message {
    line-height: 1.5;
    font-size: 1rem;

    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }
  .button-area {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    button + button {
      margin-left: 0.75rem;
    }
  }
`;

export interface PopUpContainerProps {
  visible: boolean;
  title?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({
  visible,
  title,
  children,
  onConfirm,
  onCancel,
}) => {
  return (
    <Popup visible={visible}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <PopupOKCancelBlock>
          {title && <h3>{title}</h3>}
          <div className="message">{children}</div>
          <div className="button-area">
            {onCancel && (
              <button color="transparent" onClick={onCancel}>
                취소
              </button>
            )}
            <button onClick={onConfirm}>확인</button>
          </div>
        </PopupOKCancelBlock>
      </motion.div>
    </Popup>
  );
};

export default PopUpContainer;
