const express = require("express");
const router = express.Router();
const { Content } = require("../models/Content")

router.post("/post", (req, res) => {
  const content = new Content(req.body);
  content.save((err, doc) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success: true})
  })
});

router.get("/getContent", (req, res) => {
  Content.find()
  .populate("writer")
  .exec((err, contents) => {
    if (err) return res.send(err);
    return res.json({ success: true, contents });
  })
});

module.exports = router;