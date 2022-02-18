import React from "react";
import styles from "./FilterBox.module.css"

const FilterBox = () => {

  return (
    <>
      <div className={styles.container}>
          <h2>원하는 서비스로 필터링해보세요!</h2>
          <div className={styles.buttons}>
            <button>마 실 가 요</button>
            <button>궁 금 해 요</button>
            <button>찾 아 줘 요</button>
            <button>나 눠 봐 요</button>
          </div>
      </div>
    </>
  );
};

export default FilterBox;
