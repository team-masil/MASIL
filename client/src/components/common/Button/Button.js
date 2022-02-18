import { message } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state => state.user))

  const onCancel = () => {
    navigate("/")
  };

  const onPublish = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      title: props.title,
      category: props.category,
      content: props.content
    }

    console.log(variables)
    axios.post("/api/contents/post", variables)
    .then(res => {
      if(res.data.success) {
        message.success("게시글 등록에 성공했습니다.")
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        alert('글을 등록하는데 실패했습니다.')
      }
    })
  };
  
  return (
    <>
      <section className={styles.buttons}>
        <button onClick={onCancel} className={styles.cancelButton}>
          취소
        </button>
        <button onClick={onPublish} className={styles.registerButton}>
          글 등록
        </button>
      </section>
    </>
  );
};

export default Button;
