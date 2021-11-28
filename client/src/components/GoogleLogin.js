import React from "react";
import GoogleLogin from "react-google-login";

export default function GoogleButton() {
  const onSuccess = async (response) => {
    console.log(response);

    const { googleId, profileObj } = response;

    console.log(googleId, profileObj);

    /* 
    TODO: 리덕스를 통해서 서버에 구글에서 받은 유저 정보 전달
    */

    // await onSocial({
    //   socialId: googleId,
    //   socialType: "google",
    //   email,
    //   nickname: name,
    // });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <GoogleLogin
        clientId=""
        responseType="id_token"
        onSuccess={onSuccess}
        onFailure={onFailure}
        onClick={onClick}
      />
    </div>
  );
}
