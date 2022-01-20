import React, { useState } from "react";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import styles from "./LoginPage.module.css";
import "antd/dist/antd.min.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";
import GoogleLogin from "../../GoogleLogin/GoogleLogin";
import KakaoLogin from "../../KakaoLogin/KakaoLogin"

const { Title } = Typography;

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일이 정확하지 않습니다.")
          .required("이메일을 입력하세요."),
        password: Yup.string()
          .min(6, "비밀번호는 최소 6자 이상 입력하세요.")
          .required("비밀번호를 입력하세요."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let body = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(body))
            .then((res) => {
              if (res.payload.loginSuccess) {
                window.localStorage.setItem("userId", res.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.email);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                navigate("/");
              } else {
                setFormErrorMessage("이메일 혹은 비밀번호를 다시 확인하세요.");
              }
            })
            .catch((err) => {
              setFormErrorMessage("이메일 혹은 비밀번호를 다시 확인하세요.");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className={styles.app}>
            <Title level={2}>로그인</Title>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="email"
                  prefix={<UserOutlined />}
                  placeholder="이메일을 입력하세요."
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className={styles.input_feedback}>{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  prefix={<LockOutlined />}
                  placeholder="비밀번호를 입력하세요."
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className={styles.input_feedback}>{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {formErrorMessage}
                  </p>
                </label>
              )}

              <Form.Item>
                <Checkbox
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                >
                  아이디 기억하기
                </Checkbox>
                {/* <a
                  className="login-form-forgot"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  forgot password
                </a> */}
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    로그인
                  </Button>
                </div>
                Or <a href="/register">회원가입!</a>
              </Form.Item>
                <GoogleLogin />
              {/* <KakaoLogin /> */}
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Auth(LoginPage, false);
