import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CommentList.module.css";

const getFormatedToday = (standardDate) => {
  const date = standardDate ? new Date(standardDate) : new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const sec = ("0" + date.getSeconds()).slice(-2);

  if (standardDate) {
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  } else {
    return year + "-" + month + "-" + day + "_" + hour + "-" + min + "-" + sec;
  }
};

const CommentList = (props) => {
  const user = useSelector((state) => state.user);

  const onDeleteComment = () => {
    const variable = { commentId: props.commentId, userId: user.userData._id };
    console.log(variable)

    axios.post("/api/comments/deleteComment", variable).then((res) => {
      if (res.data.success) {
        console.log(res.data.result._id)
        props.deleteFunction(res.data.result._id);
      } else {
        alert("댓글을 삭제할 수 없습니다.");
      }
    });
  };
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
                {user.userData._id === comment.writer._id && (
                  <section
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <button onClick={onDeleteComment}>삭제</button>
                  </section>
                )}
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
