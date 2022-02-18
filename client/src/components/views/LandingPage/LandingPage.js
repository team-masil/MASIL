import React from "react";
// import { FaCode } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../../../_actions/user_actions";
import Auth from "../../../hoc/auth";
import Banner from "../Banner/Banner";
import FilterBox from "../FilterBox/FilterBox";
import KakaoMap from "../../common/Map/KakaoMap";
// import styles from "./LandingPage.module.css";
import GridCard from "../GridCard/GridCard";

const LandingPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const onClickHandler = () => {
  //   dispatch(logoutUser()).then((res) => {
  //     if (res.payload.success) {
  //       navigate("/login");
  //     } else {
  //       alert("로그아웃에 실패했습니다.");
  //     }
  //   });
  // };

  return (
    <>
    <Banner />
    <KakaoMap />
    <FilterBox />
    <GridCard />
    </>
  );
};

export default Auth(LandingPage, null);
