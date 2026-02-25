import type { FC, ReactNode } from 'react';

/**
 * Props for {@link ModalHeader}.
 */
export interface ModalHeaderProps {
  /**
   * Header content (typically title).
   */
  children?: ReactNode;
}

/**
 * Modal header section.
 *
 * Typically, displays the modal title.
 */
const ModalHeader: FC<ModalHeaderProps> = ({ children }) => (
  <h1 className="text-2xl font-bold mb-4">{children}</h1>
);

export default ModalHeader;
