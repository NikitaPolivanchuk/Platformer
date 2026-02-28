import type { FC, ReactNode } from 'react';

/**
 * Props for {@link ModalFooter}.
 */
export interface ModalFooterProps {
  /**
   * Footer content (typically buttons).
   */
  children?: ReactNode;
}

/**
 * Modal footer section.
 *
 * Typically, contains action buttons.
 */
const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
  <div className="mt-6 flex flex-wrap gap-3">{children}</div>
);

export default ModalFooter;
