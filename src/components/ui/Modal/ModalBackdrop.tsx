import type { FC } from 'react';

const blurMap = {
  none: 'backdrop-blur-0',
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
} as const;

const opacityMap: Record<number, string> = {
  0: 'bg-black/0',
  10: 'bg-black/10',
  20: 'bg-black/20',
  30: 'bg-black/30',
  40: 'bg-black/40',
  50: 'bg-black/50',
  60: 'bg-black/60',
  70: 'bg-black/70',
  80: 'bg-black/80',
  90: 'bg-black/90',
  100: 'bg-black/100',
};

/**
 * Props for {@link ModalBackdrop}.
 */
export interface ModalBackdropProps {
  /**
   * Backdrop blur intensity.
   * @default 'md'
   */
  blur?: keyof typeof blurMap;

  /**
   * Background opacity (0–100).
   *
   * Supported values:
   * 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
   *
   * Values outside this range fall back to 70.
   *
   * @default 70
   */
  opacity?: number;

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
 * Provides configurable blur and opacity.
 * Uses predefined Tailwind-safe class mappings.
 * Can optionally trigger close behavior when clicked.
 */
const ModalBackdrop: FC<ModalBackdropProps> = ({
  blur = 'md',
  opacity = 70,
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
        ${blurMap[blur]}
        ${opacityMap[opacity] ?? 'bg-black/70'}
        animate-fadeIn
      `}
    />
  );
};

export default ModalBackdrop;
