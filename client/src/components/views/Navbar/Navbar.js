import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import LoggedInUser from "../LoggedInUser/LoggedInUser";

const Navbar = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handlePost = (e) => {
    if (!user.userData.isAuth) {
      navigate("/login");
    } else {
      navigate("/post");
    }
  };

  const handleSignIn = (e) => {
    navigate("/login");
  };

  return (
    <>
      <nav className={styles.navbar} style={{ zIndex: 5, width: "100%" }}>
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
            onClick={handlePost}
          >
            글쓰기
          </button>

          {user.userData && !user.userData.isAuth ? (
            <button
              type="button"
              className={styles.login}
              onClick={handleSignIn}
            >
              로그인
            </button>
          ) : (
            <LoggedInUser />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
