const express = require("express");
const app = express();
const port = 5000;
//const bodyParser = require ('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");


require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
/*
Originally body-parser dependency was used, 
but from express 4.xx their own body-parser implementation is included in Express.
*/

app.use(cookieParser());
app.use(cors());

const config = require("./config/key");

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI);
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/users", require("./routes/users"));
app.use("/api/contents", require("./routes/contents"));
app.use("/api/comments", require("./routes/comments"));
app.use("/api/likes", require("./routes/likes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
