import PostFormContainer from "containers/PostFormContainer";
import React from "react";

function PostRegister() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/register">글쓰기</a>
          </li>
          <li>로그인</li>
        </ul>
      </div>
      <PostFormContainer />
    </div>
  );
}

export default PostRegister;
