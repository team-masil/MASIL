import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../_actions/user_actions";
import Auth from "../../hoc/auth";


const Google_Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClientID = "442492822133-jj93gi9ogm9l9797ogvs2sq28v64d77q.apps.googleusercontent.com";

  const googleOnSuccess = async (res) => {
    let body = {
      tokenId: res.tokenId
    }
    await dispatch(googleLogin(body)).then((res) => {
      if(res.payload.googleOnSucces) {
        navigate("/")
      } else {
        alert("Error")
      }
    });
  };

  const googleOnFailure = (res) => {
    alert("Error")
  };
  
  return (
    <>
      <GoogleLogin
        clientId={ClientID}
        buttonText="Google login"
        onSuccess={googleOnSuccess}
        onFailure={googleOnFailure}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default Auth(Google_Login, false);
