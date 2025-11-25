import Modal from './Modal';
import ModalBackdrop from './ModalBackdrop.tsx';
import ModalPanel from './ModalPanel.tsx';
import ModalHeader from './ModalHeader.tsx';
import ModalBody from './ModalBody.tsx';
import ModalFooter from './ModalFooter.tsx';

type ModalType = typeof Modal & {
  Backdrop: typeof ModalBackdrop;
  Panel: typeof ModalPanel;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

const _Modal = Modal as ModalType;

_Modal.Backdrop = ModalBackdrop;
_Modal.Panel = ModalPanel;
_Modal.Header = ModalHeader;
_Modal.Body = ModalBody;
_Modal.Footer = ModalFooter;

export default _Modal;
