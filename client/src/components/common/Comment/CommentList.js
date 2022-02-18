import React, { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentList = (props) => {

  const getFormatedToday = (standardDate) => {
    const date = standardDate ? new Date(standardDate) : new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hour = ("0" + date.getHours()).slice(-2);
    const min = ("0" + date.getMinutes()).slice(-2);
    const sec = ("0" + date.getSeconds()).slice(-2);

    if (standardDate) {
      return (
        year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec
      );
    } else {
      return (
        year + "-" + month + "-" + day + "_" + hour + "-" + min + "-" + sec
      );
    }
  };

  console.log(props.commentList)

  return (
    <>
      <div style={{ width: "100%" }}>
        {props.commentList &&
          props.commentList.map((comment, index) => (
            <li key={index} className={styles.commentContainer}>
              <section className={styles.commentHeader}>
                <div className={styles.avatarWrapper}>
                  <img
                    className={styles.userImg}
                    src="/images/paw1.jpeg"
                    alt="userImage"
                  />

                  <div className={styles.commentInfo}>
                    <div className={styles.title}>
                      <div className={styles.userNickname}>
                        {comment.writer.name}
                      </div>
                      <div className={styles.registeredDate}>
                        {getFormatedToday(comment.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.commentContent}>
                <p className={styles.commentContent}>{comment.content}</p>
              </section>
            </li>
          ))}
      </div>
    </>
  );
};

export default CommentList;
