import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './style.module.scss';

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
  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (onClose && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>{children}</div>
    </div>,
    root,
  );
};

export default Modal;
