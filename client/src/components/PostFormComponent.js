import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Button from "./Button";

const PostFormComponent = () => {
  return (
    <>
      <Editor
        previewStyle="vertical"
        height="700px"
        initialEditType="wisiwyg"
        initialValue="내용을 입력해주세요"
      />
      <Button type="button" text="등록하기" />
    </>
  );
};

export default PostFormComponent;
