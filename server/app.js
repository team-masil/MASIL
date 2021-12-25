const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const db = require('./config/Mongoose.js'); // db 불러오기


const authRouter = require('./routes/auth');
const commentRouter = require('./routes/comment');
const loginRouter = require('./routes/login');
const petRouter = require('./routes/pet');
const postRouter = require('./routes/post');
const replyRouter = require('./routes/like');
const userRouter = require('./routes/user')

var app = express();
require("dotenv").config();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
db(); // DB 실행


//CORS Setting
app.use(
  cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

//Connect Routers
// app.use('/auth', authRouter);
// app.use('/login', loginRouter);
// app.use('/logout', logoutRouter);
// app.use('/user', userRouter);
// app.use('/pet', petRouter);
// app.use('/post', postRouter);
// app.use('/comment', commentRouter);
// app.use('/reply', replyRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


//HTTPS 서버
// https
//   .createServer(
//     {
//       key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
//       cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
//     },
//     app.use('/', (req, res) => {
//       res.send('Congrats! You made https server now :)');
//     })
//   )
//   .listen(3001);


//HTTP 서버
let server = app.listen(process.env.HTTP_PORT, () => {
  console.log(`
    ########################################
    🛡️  Server listening on port: ${process.env.HTTP_PORT}  🛡️
    ########################################
  `);
});

module.exports = server;
