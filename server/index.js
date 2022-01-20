const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");
const cors = require('cors')

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*
원래는 body-parser dependency를 사용해서
app.use(body-parser.urlencoded({extended: true}));
app.use(body-parser.json());
옵션을 작성해야 하지만
express 4.xx 버전 이상으로는 express에 body-parser 내장
*/
app.use(cookieParser());
app.use(cors())

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
