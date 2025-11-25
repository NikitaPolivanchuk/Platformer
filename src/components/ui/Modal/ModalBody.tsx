import type { FC, ReactNode } from 'react';

interface ModalBodyProps {
  children?: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => (
  <div className="text-gray-300">{children}</div>
);

export default ModalBody;
