import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import SocialLoginContainer from "containers/SocialLoginContainer/SocialLoginContainer";

const Wrapper = styled.div`
  width: 800px;
  height: 550px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* top: -200%; */
  margin: 0 auto;
`;

const ModalHeader = styled.div`
  background: #f8f9fa;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
  height: 3rem;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAiOutlineClose = styled(AiOutlineClose)`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
`;

const LoginModal = ({ handleClose }) => {
  return (
    <Wrapper>
      <ModalHeader>
        <div>로고</div>
        <StyledAiOutlineClose onClick={handleClose} />
      </ModalHeader>
      <ModalBody>
        <SocialLoginContainer handleClose={handleClose} />
      </ModalBody>
    </Wrapper>
  );
};

export default LoginModal;
