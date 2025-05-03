import { CSSProperties } from "styled-components";
import { ModalContainer, Overlay } from "src/components/styleds/ModalComponents";
import { useEffect } from "react";

type props  = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    style?: CSSProperties
}

const CustomModal = ({
    isOpen,
    onClose,
    children,
    style
  }: props) => {

    useEffect(() => {
      if (typeof document === 'undefined') return
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()} style={style}>
          {children}
        </ModalContainer>
      </Overlay>
    );
};

export default CustomModal;
