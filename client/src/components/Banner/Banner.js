import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>
          <span className={styles.titleContent}>내가 사랑하는 </span>
          <span className={styles.titleContent}>반려동물이 </span>
          <span className={styles.titleContent}>더 행복해질 수 있도록</span>
        </h1>
        <div className={styles.subBanner}>
          <div className={styles.subImgWrapper}>
            <img
              className={styles.subImg}
              src="images/MASIL_textLogo.jpg"
              alt="sub logo"
            />
          </div>
          <span className={styles.weak}>이 항상 함께 할게요.</span>
        </div>
      </div>
      <div className={styles.bannerImg}>
        <img
          className={styles.mainImg}
          src="images/mainImage.jpg"
          alt="main logo"
        />
      </div>
    </section>
  );
};

export default Banner;
