const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const { OAuth2Client } = require("google-auth-library");

require("dotenv").config();

router.get("/auth", auth, (req, res) => {
  //auth 미들웨어를 통과해서 여기까지 왔으면 authentication이 통과했다는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post("/register", (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/login", (req, res) => {
  //요청된 email을 데이터베이스에서 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일이 유효하지 않습니다.",
      });
    }
    //요청된 email이 데이터베이스에 있다면 비밀번호가 맞는지 확인한다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 맞지 않습니다.",
        });
      //비밀번호가 맞다면 토큰을 생성한다.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //token을 cookie에 저장한다.
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

const client = new OAuth2Client(process.env.CLIENT_ID);

router.post("/googlelogin", (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.CLIENT_ID,
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ email }, (err, user) => {
          if (err) {
            return res.json({
              googleOnSucces: false,
              message: "이메일이 유효하지 않습니다.",
            });
          } else {
            if (user) {
              user.generateToken((err, user) => {
                if (err) {
                  return res.send(err);
                }
                res
                  .cookie("x_auth", user.token)
                  .status(200)
                  .json({ googleOnSucces: true, userId: user._id });
              });
            } else {
              let password = email + process.env.CLIENT_ID;
              let newUser = new User({ name, email, password });

              newUser.save((err, userInfo) => {
                if (err) return res.json({ success: false, err });
                return res.json({ success: true });
              });
            }
          }
        });
      }
    });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

module.exports = router;
