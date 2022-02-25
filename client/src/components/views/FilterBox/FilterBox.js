import React, { useState, useEffect } from "react";
import GridCard from "../GridCard/GridCard";
import axios from "axios";
import styles from "./FilterBox.module.css";

const FilterBox = () => {
  const [FilterAction, setFilterAction] = useState(false);
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

  /*
FilterAction이 False 이면
컨텐츠들을 모두 불러와서
클릭된 value 값으로 필터링 된 Contents들로 Content 상태를 바꾸고
FilterAction을 true로 변경한다.
이 상태에서 한번 더 클릭하면
컨텐츠들을 다시 모두 불러오고
FilterAction을 false로 바꾼다.
*/

  const categoryChange = (e) => {
    if (FilterAction === false) {
      axios.get("/api/contents/getContent").then((res) => {
        if (res.data.success) {
          setContent(res.data.contents.filter((content) => e.target.value === content.category));
          setFilterAction(true);
        } else {
          alert("비디오를 불러올 수 없습니다.");
        }
      });
    } else {
      axios.get("/api/contents/getContent").then((res) => {
        if (res.data.success) {
          setContent(res.data.contents);
          setFilterAction(false);
        } else {
          alert("비디오를 불러올 수 없습니다.");
        }
      });
    }
  };

  // setContent(Content.filter((content) => Category === content.category));

  // 버튼을 클릭하면 버튼 배경을 회색으로 바꾸고
  // 다시 클릭하면 흰색으로 복귀
  return (
    <>
      <div className={styles.container}>
        <h2>원하는 서비스로 필터링해보세요!</h2>
        <div className={styles.buttons}>
          <button onClick={categoryChange} value={"마실가요"}>
            마 실 가 요
          </button>
          <button onClick={categoryChange} value={"궁금해요"}>
            궁 금 해 요
          </button>
          <button onClick={categoryChange} value={"찾아줘요"}>
            찾 아 줘 요
          </button>
          <button onClick={categoryChange} value={"나눠봐요"}>
            나 눠 봐 요
          </button>
        </div>
      </div>
      <GridCard content={Content} />
    </>
  );
};

export default FilterBox;
