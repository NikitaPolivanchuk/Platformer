import type { FC, ReactNode } from 'react';

interface ModalFooterProps {
  children?: ReactNode;
}

const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
  <div className="mt-6 flex flex-wrap gap-3">{children}</div>
);

export default ModalFooter;
