const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const Ques = require("../models/Ques");

router.post("/upload", function (req, res) {
    const date = new Date();
    const newQues = new Ques({
        Author: mongoose.Types.ObjectId(req.user._id),
        Ques: req.body.QuesTitle,
        Description: req.body.QuesDetail,
        Tags: req.body.Tags,
        Date: date,
        Answers: [0]
    });
    newQues.save(function (err, doc) {
        console.log(doc._id);
    });
    res.redirect("http://localhost:3000/community")
})

router.get("/ques",function(req,res){
    Ques.find({},function(err,docs){
        if(!err){
            res.json(docs);
        }
    })
})








module.exports = router