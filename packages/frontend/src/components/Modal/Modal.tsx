import React from 'react';
import cns from 'classnames';

import './Modal.css'

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    isOpen ? (
      <div
        className={cns("Modal fullscreen", {
          'hidden': !isOpen
        })}
        onClick={onClose}
      >
        {children}
      </div>
    ) : null
  )
}
