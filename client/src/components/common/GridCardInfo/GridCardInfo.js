import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GridCardInfo.module.css";
import { FaRegCommentDots } from "react-icons/fa";

const GridCardInfo = (props) => {
  const [Comments, setComments] = useState(0);
  const [Likes, setLikes] = useState(0);

  useEffect(() => {
    const variable = { contentId: props.content._id };

    axios.post("/api/comments/getComments", variable).then((res) => {
      if (res.data.success) {
        setComments(res.data.comments.length);
      } else {
        alert("댓글 정보를 불러올 수 없습니다.");
      }
    });

    axios.post("/api/likes/getLikes", variable).then((res) => {
      if (res.data.success) {
        setLikes(res.data.likes.length);
      } else {
        alert("좋아요 정보를 불러올 수 없습니다.");
      }
    });
  }, []);

  return (
    <>
      <section className={styles.info}>
        <div className={styles.infoItem}>
          <FaRegCommentDots size={20} color={"#9A9A9A"} />
          <p className={styles.comments}>{Comments}</p>
        </div>
        <div className={styles.infoItem}>
          <img
            className={styles.itemImg}
            src="/images/heart_filled.png"
            alt="likes"
          />
          <p className={styles.likes}>{Likes}</p>
        </div>
      </section>
    </>
  );
};

export default GridCardInfo;
