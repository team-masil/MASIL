const express = require("express");
const router = express.Router();
const { Like } = require("../models/Like");

router.post("/getLikes", (req, res) => {
  Like.find(req.body).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, likes });
  });
});

router.post("/like", (req, res) => {
  const like = new Like(req.body);
  like.save((err, likeResult) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

router.post("/unlike", (req, res) => {
  Like.findOneAndDelete(req.body).exec((err, unlikeResult) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
