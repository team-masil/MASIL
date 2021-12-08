import Modal from "components/Modal";
import LoginModal from "components/Modal/LoginModal";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal((prev) => !prev);
  };

  const handleRegister = () => {
    navigate("/register");
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
          <button
            type="button"
            className={styles.postRegister}
            onClick={handleRegister}
          >
            글쓰기
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
