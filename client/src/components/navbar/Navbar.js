import LoginContainer from "containers/LoginContainer";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false);

  const handleLoginModal = () => setLoginModal((prev) => !prev);

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <img className={styles.logo} src="/images/MASIL.jpg" alt="logo" />
        </a>
        <div className={styles.navbarElementWrapper}>
          <button type="button" className={styles.postRegister}>
            <a href="/register">글쓰기</a>
          </button>
          <button
            type="button"
            className={styles.login}
            onClick={handleLoginModal}
          >
            로그인
          </button>
          {loginModal ? <LoginContainer /> : null}{" "}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
