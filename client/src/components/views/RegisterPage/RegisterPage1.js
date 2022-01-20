import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth"

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNamelHandler = (e) => {
    setName(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(Password !== ConfirmPassword) {
        return alert('비밀번호가 일치하지 않습니다.')
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate("/login");
      } else {
        alert("Faild to sign up");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNamelHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Auth(RegisterPage, false);