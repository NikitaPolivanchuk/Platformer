import type { FC } from 'react';

/**
 * Props for {@link ModalBackdrop}.
 */
export interface ModalBackdropProps {
  /**
   * Backdrop blur intensity.
   * @default 'md'
   */
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Background opacity (0–100).
   * @default 70
   */
  opacity?: number;

  /**
   * Background color (Tailwind color name).
   * @default 'black'
   */
  color?: string;

  /**
   * Optional click handler.
   */
  onClick?: () => void;

  /**
   * Controls whether clicking the backdrop triggers close behavior.
   * @default 'close'
   */
  clickBehavior?: 'close' | 'ignore';
}

/**
 * Modal backdrop overlay component.
 *
 * Provides configurable blur, opacity, and color.
 * Can optionally trigger close behavior when clicked.
 */
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
