import { createPortal } from 'react-dom';
import type { FC, ReactNode } from 'react';

const root = document.getElementById('modal-root');
if (!root) {
  throw new Error('Modal root is missing');
}

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center animate-fadeIn"
      data-modal-root
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      {children}
    </div>,
    root,
  );
};

export default Modal;
