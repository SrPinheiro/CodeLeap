import { ModalContainer, Overlay } from "./ModalComponents";

type props  = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CustomModal = ({
    isOpen,
    onClose,
    children,
  }: props) => {
    if (!isOpen) return null;
  
    return (
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </Overlay>
    );
};

export default CustomModal;
