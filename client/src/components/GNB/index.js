import Modal from "components/Modal";
import LoginModal from "components/Modal/LoginModal";
import React, { useState } from "react";

const GNB = () => {
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal((prev) => !prev);
  };

  return (
    <div>
      <ul>
        <li>
          <a href="/">홈</a>
        </li>
        <li>
          <a href="/register">글쓰기</a>
        </li>
        <li>
          <button onClick={openModal} type="button">
            로그인
          </button>
          {loginModal ? (
            <Modal visible={loginModal} name="login" onClose={openModal}>
              <LoginModal handleClose={openModal} tabIndex={0} />
            </Modal>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default GNB;
