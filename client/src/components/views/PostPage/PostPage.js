import React from "react";
import { FaRegStickyNote } from "react-icons/fa";
import styles from "./PostPage.module.css";

const PostPage = () => {
  return (
    <>
      <div className={styles.main}>
        <FaRegStickyNote style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Post Page</span>
      </div>
    </>
  );
};

export default PostPage;
