import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GridCard.module.css";
import { Row } from "antd";
import GridCardInfo from "components/common/GridCardInfo/GridCardInfo";

const GridCard = () => {
  const [Content, setContent] = useState([]);

  useEffect(() => {
    axios.get("/api/contents/getContent").then((res) => {
      if (res.data.success) {
        setContent(res.data.contents);
      } else {
        alert("비디오를 불러올 수 없습니다.");
      }
    });
  }, []);

  const renderCards = Content.map((content, index) => {
    return (
      <div key={index} className={styles.cardItem}>
        <a href={`content/${content._id}`}>
          <div className={styles.category}>{content.category}</div>
          <h1 className={styles.title}>{content.title}</h1>
          {/* <h2 className={styles.writer}>{content.writer.name}</h2> */}
          {/* <div className={styles.content}>{content.content}</div> */}
          {content.category === "마실가요" && (
            <img className={styles.image1} src="/images/dog1.png" alt="masil" />
          )}
          {content.category === "궁금해요" && (
            <img className={styles.image2} src="/images/question.jpeg" alt="question" />
          )}
          {content.category === "찾아줘요" && (
            <img className={styles.image3} src="/images/find.png" alt="find" />
          )}
          {content.category === "나눠봐요" && (
            <img className={styles.image4} src="/images/share.png" alt="share" />
          )}
        <GridCardInfo content={content}  />
        </a>
      </div>
    );
  });

  return (
    <>
      <div style={{ width: "80%", margin: "3rem auto" }}>
        <h2>게시글</h2>
        <hr />
        <Row>{renderCards}</Row>
      </div>
    </>
  );
};

export default GridCard;
