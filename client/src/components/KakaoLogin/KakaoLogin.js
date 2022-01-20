import React from "react";
import KaKaoLogin from "react-kakao-login";


const Kakao_Login = () => {
    
    const ClientID = "4cb7da16bd5700828fc434ecefd23d72";

    const kakaoOnSuccess = (res) => {
        console.log(res);
    }

    const kakaoOnFailure = (res) => {
        console.log(res)
    }

  return (
    <>
    <KaKaoLogin
        jskey={ClientID}
        onSuccess={kakaoOnSuccess}
        onFailure={kakaoOnFailure}
        getProfile={true}
    >
        <div style={{
            width: "200px"
        }}> KaKao Login</div>
    </ KaKaoLogin>
    </>
  );
};

export default Kakao_Login;
