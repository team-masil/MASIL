import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./Comment.module.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Comment = (props) => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate();

  const [CommentValue, setCommentValue] = useState("");

  const onCommentValueChange = (e) => {
    setCommentValue(e.target.value)
  }

  const onRegisterComment = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      content: CommentValue,
      contentId: props.contentId,
    };
    if (!user.userData.isAuth) {
      message.warning("로그인 후 이용가능합니다.")
    } else { 
      axios.post("/api/comments/saveComment", variables).then((res) => {
        if (res.data.success) {
          setCommentValue("");
          props.refreshFunction(res.data.result);
        } else {
          alert("댓글을 등록할 수 없습니다.");
        }
      });
    }
  };

  return (
    <div className={styles.commentInput}>
      <h1 className={styles.commentCount}>{props.commentList.length}개의 댓글이 있습니다.</h1>
      <textarea
        placeholder="댓글을 입력하세요."
        value={CommentValue}
        onChange={onCommentValueChange}
      ></textarea>
      <div className={styles.buttonWrapper}>
        <button
          onClick={onRegisterComment}
          className={styles.buttonComplete}
          name="register"
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
};

export default Comment;
