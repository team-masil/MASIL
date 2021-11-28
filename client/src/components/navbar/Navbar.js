import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="/">MASIL</a>
        <div>
          <button type="button">
            <a href="/register">글쓰기</a>
          </button>
          <button type="button">로그인</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
