import type { FC } from 'react';

interface ModalBackdropProps {
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  color?: string;
  onClick?: () => void;
  clickBehavior?: 'close' | 'ignore';
}

const ModalBackdrop: FC<ModalBackdropProps> = ({
  blur = 'md',
  opacity = 70,
  color = 'black',
  onClick,
  clickBehavior = 'close',
}) => {
  return (
    <div
      onClick={(e) => {
        if (clickBehavior === 'close' && onClick) onClick();
        e.stopPropagation();
      }}
      className={`
        absolute inset-0
        bg-${color}/${opacity}
        backdrop-blur-${blur}
        animate-fadeIn
      `}
    />
  );
};

export default ModalBackdrop;
