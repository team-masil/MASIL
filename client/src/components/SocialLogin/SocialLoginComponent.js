import React from "react";
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";

const SocialLoginComponent = ({
  googleOnSuccess,
  googleOnFailure,
  googleClientId,
  kakaoOnSuccess,
  kakaoOnFailure,
  kakaoClientId,
}) => {
  return (
    <>
      <h1>MASIL에 오신 것을 환영합니다!</h1>
      <div>소셜 계정으로 로그인</div>
      <section>
        <GoogleLogin
          clientId={googleClientId}
          responseType={"id_token"}
          onSuccess={googleOnSuccess}
          onFailure={googleOnFailure}
        />
        <KakaoLogin
          token={kakaoClientId}
          onSuccess={kakaoOnSuccess}
          onFailure={kakaoOnFailure}
        />
      </section>
    </>
  );
};

export default SocialLoginComponent;
