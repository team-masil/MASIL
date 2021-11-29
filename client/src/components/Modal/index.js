import React from "react";
import styled from "styled-components";
import Portal from "./Portal/Portal";

const ModalWrapper = styled.div`
  box-sizing: border-box;
  /* display: ${(props) => (props.visible ? "block" : "none")}; */
  max-width: 520px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid #000;
  background-color: #fff;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: ${(props) =>
    props.name === "loading" ? "white" : "rgba(77, 77, 77, 0.5)"};
  z-index: 999;
`;

const Modal = ({ name, onClose, visible, children }) => {
  const onMaskClick = (e) => {
    if (onClose === undefined) return;
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <ModalOverlay name={name} visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
        {children}
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
