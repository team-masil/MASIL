import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./LoggedInUser.module.css";
import { logoutUser } from "../../../_actions/user_actions";
import { message } from "antd";

const LoggedInUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logoutUser()).then((res) => {
      if (res.payload.success) {
        message.success("로그아웃에 성공했습니다.")
        navigate("/login");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return (
    <>
      <button type="button" className={styles.logout} onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
};

export default LoggedInUser;
