import type { FC, ReactNode } from 'react';

interface ModalHeaderProps {
  children?: ReactNode;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => (
  <h1 className="text-2xl font-bold mb-4">{children}</h1>
);

export default ModalHeader;
