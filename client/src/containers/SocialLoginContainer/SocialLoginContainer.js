import React from "react";
import { useDispatch } from "react-redux";
import SocialLoginComponent from "components/SocialLogin/SocialLoginComponent";

const SocialLoginContainer = ({ handleClose }) => {
  const googleClientId = process.env.REACT_APP_GOOGLE_LOGIN_API_KEY;
  const kakaoClientId = process.env.REACT_APP_KAKAO_LOGIN_API_KEY;
  const dispatch = useDispatch();

  const googleOnSuccess = async (response) => {
    const { tokenId } = response;
    const userData = { code: tokenId, social: "google" };
  };

  const googleOnFailure = (error) => {
    console.log(error);
  };

  const kakaoOnSuccess = async (data) => {
    const accessToken = data.response.access_token;
    const userData = { code: accessToken, social: "kakao" };
  };

  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <SocialLoginComponent
      googleOnSuccess={googleOnSuccess}
      googleOnFailure={googleOnFailure}
      googleClientId={googleClientId}
      kakaoOnSuccess={kakaoOnSuccess}
      kakaoOnFailure={kakaoOnFailure}
      kakaoClientId={kakaoClientId}
    />
  );
};

export default SocialLoginContainer;
