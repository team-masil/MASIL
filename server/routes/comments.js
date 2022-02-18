const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");


router.post("/saveComment", (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) res.json({ success: false, err });
    Comment.find({ _id: comment._id })
      .populate("writer")
      .exec((err, result) => {
        if (err) res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post("/getComments", (req, res) => {
  Comment.find({"contentId": req.body.contentId})
    .populate("writer")
    .exec((err, comments) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({success: true, comments})
    })
});

router.post("/deleteComment", (req, res) => {
  Comment.findOneAndDelete(req.body.commentId)
  .exec((err, result) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success: true, result})
  })
});

module.exports = router;
