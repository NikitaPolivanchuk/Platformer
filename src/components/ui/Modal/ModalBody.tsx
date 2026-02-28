import type { FC, ReactNode } from 'react';

/**
 * Props for {@link ModalBody}.
 */
export interface ModalBodyProps {
  /**
   * Body content.
   */
  children?: ReactNode;
}

/**
 * Modal content body wrapper.
 */
const ModalBody: FC<ModalBodyProps> = ({ children }) => (
  <div className="text-gray-300">{children}</div>
);

export default ModalBody;
