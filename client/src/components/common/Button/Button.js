import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  const onCancel = () => {

  };

  const onPublish = () => {

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
