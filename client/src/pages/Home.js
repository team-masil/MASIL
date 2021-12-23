import Banner from "components/Banner/Banner";
import Map from "components/Map/Map";
import Navbar from "components/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Map />
      <div>
        <button type="button">최신</button>
        <button type="button">인기</button>
      </div>
      <div>게시글 목록</div>
    </>
  );
};

export default Home;
