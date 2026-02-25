import type { FC, ReactNode } from 'react';

/**
 * Props for {@link ModalPanel}.
 */
export interface ModalPanelProps {
  /**
   * Panel content.
   */
  children?: ReactNode;
}

/**
 * Main modal container panel.
 *
 * Provides layout, border, animation, and styling.
 */
const ModalPanel: FC<ModalPanelProps> = ({ children }) => (
  <div
    className="
        relative z-10
        bg-neutral-800 text-gray-100 p-6 rounded-lg
        border border-neutral-700 shadow-2xl
        w-full max-w-md animate-scaleIn
      "
  >
    {children}
  </div>
);

export default ModalPanel;
