import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../../../hoc/auth";
import styles from "./ContentDetail.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { Content } from "antd/lib/layout/layout";

const ContentDetail = () => {
  const contentId = useParams().contentId;
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [ContentDetail, setContentDetail] = useState([])

  useEffect(() => {
    let variable = { contentId: contentId };

    axios.post("/api/contents/getContentDetail", variable)
    .then(res => {
      if(res.data.success) {
        console.log(res.data)
        setContentDetail(res.data.contentDetail)
      } else {
        alert('게시글을 불러올 수 없습니다.')
      }
    })
  }, []);

  const handleBack = () => {
    navigate(-1)
  }

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
  };

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
                <div className={styles.userName}>
                  {ContentDetail.writer.name}
                </div>
              </div>
              <div className={styles.registeredDate}>
                {formatDate(ContentDetail.createdAt)}
              </div>
            </div>
          </section>
          <div><hr /></div>
          <div className={styles.postContentWrapper}>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: ContentDetail.content }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth(ContentDetail, null);
