import React, { useState, useEffect } from "react";
import styles from "./LikeAndView.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const LikeAndView = (props) => {
  const user = useSelector((state) => state.user);

  const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState("unLiked");

  let variable = { contentId: props.contentId, userId: user.userData._id };

  useEffect(() => {
    axios.post("/api/likes/getLikes", variable)
    .then(res => {
      if(res.data.success) {

      } else {
        alert("좋아요 정보를 가져올 수 없습니다.")
      }
    })
  }, [])

  const onClickLikeAndUnLike = () => {
    // 1. 좋아요를 하지 않은 상태일 때,
    //    좋아요를 누르면 좋아요 수를 +1 하고
    //    상태를 liked로 바꾼다.
    if(LikeAction === "unLiked") {
      axios.post("/api/likes/like", variable)
      .then(res => {
        if(res.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked")
        } else {
          alert('좋아요를 할 수 없습니다.')
        }
      })
    // 2. 좋아요를 한 상태일 때,
    //    좋아료를 누르면 좋아요 수를 -1 하고
    //    상태를 unliked로 바꾼다.
    } else if(LikeAction === "liked") {
      axios.post("/api/likes/unlike", variable)
      .then(res => {
        if(res.data.success) {
          setLikes(Likes - 1);
          setLikeAction("unLiked")
        } else {
          alert("좋아요를 취소할 수 없습니다.")
        }
      })
    }

  }
  
  return (
    <>
      <section className={styles.likesAndViewsWrapper}>
        <div className={styles.likes}>
          {LikeAction === "unLiked" ? (
            <img
              onClick={onClickLikeAndUnLike}
              className={styles.itemImg}
              src="/images/heart_unfilled.png"
              alt="likes"
            />
          ) : (
            <img
              onClick={onClickLikeAndUnLike}
              className={styles.itemImg}
              src="/images/heart_filled.png"
              alt="likes"
            />
          )}
          <p>{Likes}</p>
        </div>
      </section>
    </>
  );
};

export default LikeAndView;
