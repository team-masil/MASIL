import React from "react";
import styles from "./GridCard.module.css";
import { Row } from "antd";
import GridCardInfo from "components/common/GridCardInfo/GridCardInfo";

const GridCard = (props) => {

  const renderCards = props.content.map((content, index) => {
    return (
      <div key={index} className={styles.cardItem}>
        <a href={`content/${content._id}`}>
          <div className={styles.category}>{content.category}</div>
          <h1 className={styles.title}>{content.title}</h1>
          {content.category === "마실가요" && (
            <img className={styles.image1} src="/images/dog1.png" alt="masil" />
          )}
          {content.category === "궁금해요" && (
            <img
              className={styles.image2}
              src="/images/question.jpeg"
              alt="question"
            />
          )}
          {content.category === "찾아줘요" && (
            <img className={styles.image3} src="/images/sos.png" alt="find" />
          )}
          {content.category === "나눠봐요" && (
            <img
              className={styles.image4}
              src="/images/share.png"
              alt="share"
            />
          )}
          <GridCardInfo content={content} />
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
