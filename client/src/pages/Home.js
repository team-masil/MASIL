import Banner from "components/Banner/Banner";
import Navbar from "components/Navbar/Navbar";
import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <ul>
          <li>궁금해요</li>
          <li>마실가요</li>
          <li>찾아줘요</li>
          <li>나눠봐요</li>
        </ul>
      </div>
      <div>
        <button type="button">최신</button>
        <button type="button">인기</button>
      </div>
      <div>게시글 목록</div>
    </>
  );
};

export default Home;
