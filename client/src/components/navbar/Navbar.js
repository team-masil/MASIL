import Modal from "components/Modal";
import LoginModal from "components/Modal/LoginModal";
import LoginContainer from "containers/LoginContainer";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <img
            className={styles.logo}
            src="/images/MASIL_mainLogo.jpeg"
            alt="logo"
          />
        </a>
        <div className={styles.navbarElementWrapper}>
          <button type="button" className={styles.postRegister}>
            <a href="/register">글쓰기</a>
          </button>
          <button type="button" className={styles.login} onClick={openModal}>
            로그인
          </button>
          {loginModal ? (
            <Modal visible={loginModal} name="login" onClose={openModal}>
              <LoginModal handleClose={openModal} tabIndex={0} />
            </Modal>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
