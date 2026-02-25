import Modal from './Modal';
import ModalBackdrop from './ModalBackdrop.tsx';
import ModalPanel from './ModalPanel.tsx';
import ModalHeader from './ModalHeader.tsx';
import ModalBody from './ModalBody.tsx';
import ModalFooter from './ModalFooter.tsx';

/**
 * Compound component type for {@link Modal}.
 *
 * Extends the base `Modal` component with statically attached
 * subcomponents to support the compound component pattern:
 *
 * @example
 * ```tsx
 * <Modal open={open} onClose={close}>
 *   <Modal.Backdrop />
 *   <Modal.Panel>
 *     <Modal.Header>Title</Modal.Header>
 *     <Modal.Body>Content</Modal.Body>
 *     <Modal.Footer>
 *       <button onClick={close}>Close</button>
 *     </Modal.Footer>
 *   </Modal.Panel>
 * </Modal>
 * ```
 *
 * This allows namespaced usage like `Modal.Panel`
 * while preserving proper TypeScript inference.
 */
type ModalType = typeof Modal & {
  /**
   * Backdrop overlay component.
   */
  Backdrop: typeof ModalBackdrop;

  /**
   * Main modal container panel.
   */
  Panel: typeof ModalPanel;

  /**
   * Header section component.
   */
  Header: typeof ModalHeader;

  /**
   * Body section component.
   */
  Body: typeof ModalBody;

  /**
   * Footer section component.
   */
  Footer: typeof ModalFooter;
};

/**
 * Modal component enhanced with compound subcomponents.
 *
 * This enables the `Modal.*` namespaced API while keeping
 * the base `Modal` implementation unchanged.
 *
 * Exported as the default modal entry point.
 */
const _Modal = Modal as ModalType;

_Modal.Backdrop = ModalBackdrop;
_Modal.Panel = ModalPanel;
_Modal.Header = ModalHeader;
_Modal.Body = ModalBody;
_Modal.Footer = ModalFooter;

export default _Modal;
