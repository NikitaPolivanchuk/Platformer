import { createPortal } from 'react-dom';
import type { FC, ReactNode } from 'react';

/**
 * Props for {@link Modal}.
 */
export interface ModalProps {
  /**
   * Whether the modal is visible.
   */
  open: boolean;

  /**
   * Optional callback invoked when the modal requests to close.
   */
  onClose?: () => void;

  /**
   * Modal content.
   */
  children?: ReactNode;
}

/**
 * Portal-based modal wrapper.
 *
 * Renders children into the global `root` element.
 */
const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }

  const root = document.getElementById('modal-root');
  if (!root) {
    throw new Error('Modal root is missing');
  }

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
