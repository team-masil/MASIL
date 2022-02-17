import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GridCard.module.css";
import { useNavigate } from "react-router-dom";
import { Row } from "antd"
import { FaRegCommentDots, FaRegEye } from "react-icons/fa";


const GridCard = () => {
  const navigate = useNavigate();

  const [Content, setContent] = useState([]);

  useEffect(() => {
    axios.get("/api/contents/getContent").then((res) => {
      console.log(res.data)
      if (res.data.success) {
        setContent(res.data.contents)
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
          <h2 className={styles.writer}>{content.writer.name}</h2>
          <div className={styles.content}>{content.content}</div>
        </a>
      </div>
    );
  })

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
