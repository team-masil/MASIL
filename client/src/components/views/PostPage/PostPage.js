import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import styles from "./PostPage.module.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import Button from "components/common/Button/Button";
import PostMap from "components/common/Map/PostMap/PostMap";

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

const PostPage = (props) => {
  const user = useSelector((state) => state.user);
  const editorRef = useRef();

  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Content, setContent] = useState("");
  const [Address, setAddress] = useState("")

  const changeAddress = (address) => {
    setAddress(address)
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.value);
  };

  const onContentsChange = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  const onAdressChange = () => {
    setAddress(Address)
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  console.log(Address)

  return (
    <>
      <section className={styles.editorWrapper}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder=" 제목을 입력하세요"
          onChange={onTitleChange}
        />
        <div className={styles.categoryWrapper}>
          <h3 className={styles.categoryList}>카테고리 :</h3>
          <div className={styles.categoryListsWrapper}>
            <Select
              styles={customStyles}
              options={categoryLists}
              placeholder="원하는 서비스를 선택하세요!"
              onChange={onCategoryChange}
            />
          </div>
          <h3 className={styles.myPosition}>내 위치 :</h3>
          <div className={styles.myPositionWrapper}>
            <input
              className={styles.addressInput}
              type="text"
              value={Address}
              placeholder="지도에 마커를 남겨주세요"
              onChange={onAdressChange}
            />
          </div>
        </div>
        <PostMap changeAddress={changeAddress} />
        <div className={styles.textEditor}>
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            placeholder="내용을 입력하세요."
            onChange={onContentsChange}
            ref={editorRef}
          />
        </div>
        <Button
          user={user.userData._id}
          title={Title}
          category={Category}
          content={Content}
          address={Address}
        />
      </section>
    </>
  );
};

export default PostPage;
