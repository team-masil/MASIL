import React from "react";
import Auth from "../../../hoc/auth";
import Banner from "../Banner/Banner";
import FilterBox from "../FilterBox/FilterBox";
import KakaoMap from "../../common/Map/KakaoMap";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <KakaoMap />
      <FilterBox />
    </>
  );
};

export default Auth(LandingPage, null);
