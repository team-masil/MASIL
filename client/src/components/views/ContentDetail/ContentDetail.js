import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../../../hoc/auth";
import styles from "./ContentDetail.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Comment from "../../common/Comment/Comment"
import CommentList from "components/common/Comment/CommentList";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const ContentDetail = () => {
  const contentId = useParams().contentId;
  const navigate = useNavigate();

  const [ContentDetail, setContentDetail] = useState([]);
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    const variable = { contentId: contentId };

    axios.post("/api/contents/getContentDetail", variable)
    .then(res => {
      if(res.data.success) {
        setContentDetail(res.data.contentDetail)
      } else {
        alert('게시글을 불러올 수 없습니다.')
      }
    })

    axios.post("/api/comments/getComments", variable).then((res) => {
      if (res.data.success) {
        setComments(res.data.comments);
      } else {
        alert("댓글 정보를 불러올 수 없습니다.");
      }
    });
  }, [contentId]);

  const handleBack = () => {
    navigate(-1)
  }

  const refreshFunction = (newComment) => {
    setComments(Comments.concat(newComment));
  }

  const deleteFunction = (deletedCommentId) => {
    let newComments = Comments.filter(comment => comment._id !== deletedCommentId)
    setComments(newComments);
  }

  return (
    <>
      {ContentDetail.writer && (
        <div className={styles.wrapper}>
          <section className={styles.postHeader}>
            <FaArrowLeft
              size="30"
              color="808080"
              cursor="pointer"
              onClick={handleBack}
            />
            <div className={styles.category}>{ContentDetail.category}</div>
            <div className={styles.title}>{ContentDetail.title}</div>
            <div className={styles.userAndDate}>
              <div className={styles.user}>
                <img
                  className={styles.userImg}
                  src="/images/paw1.jpeg"
                  alt="userImage"
                />
                <div className={styles.userName}>
                  {ContentDetail.writer.name}
                </div>
              </div>
              <div className={styles.registeredDate}>
                {formatDate(ContentDetail.createdAt)}
              </div>
            </div>
          </section>
          <div>
            <hr />
          </div>
          <div className={styles.postContentWrapper}>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: ContentDetail.content }}
            ></div>
          </div>
          <Comment
            refreshFunction={refreshFunction}
            commentList={Comments}
            contentId={contentId}
          />
          <CommentList
            deleteFunction={deleteFunction}
            commentList={Comments}
            commentId={Comments._id}
          />
        </div>
      )}
    </>
  );
};

export default Auth(ContentDetail, null);
