import React from "react";
import Select from "react-select";
import styles from "./PostPage.module.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import Button from "components/common/Button/Button";
import KakaoMap from "../Map/KakaoMap";

const PostPage = () => {
  const categoryLists = [
    { value: "마실가요", label: "마실가요" },
    { value: "궁금해요", label: "궁금해요" },
    { value: "찾아줘요", label: "찾아줘요" },
    { value: "나눠봐요", label: "나눠봐요" },
  ];

  const customStyles = {
    control: (css) => ({
      ...css,
      maxWidth: "500px",
      width: "100%",
      minHeight: "3rem",
    }),
  };

  const onChangeTitle = () => {};

  return (
    <>
      <section className={styles.editorWrapper}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder=" 제목을 입력하세요"
          onChange={onChangeTitle}
          // value={title}
        />
        <div className={styles.categoryWrapper}>
          <h3 className={styles.categoryList}>카테고리 : </h3>
          <div className={styles.categoryListsWrapper}>
            <Select
              styles={customStyles}
              options={categoryLists}
              placeholder="원하는 서비스를 선택하세요!"
            />
          </div>
        </div>
        <div className={styles.textEditor}>
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
          />
        </div>
        <Button />
      </section>
    </>
  );
};

export default PostPage;
