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
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, contents });
  })
});

router.post("/getContentDetail", (req, res) => {
  Content.findOne({"_id": req.body.contentId})
  .populate("writer")
  .exec((err, contentDetail) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, contentDetail });
  })
});

router.post("/deleteContent", (req, res) => {
  Content.findOneAndDelete({"_id": req.body.contentId})
  .exec((err, result) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success: true, result})
  })
});
module.exports = router;