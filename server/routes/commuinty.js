const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const Ques = require("../models/Ques");
const Ans = require("../models/Answer");

router.post("/upload", function (req, res) {
    const date = new Date();
    const newQues = new Ques({
        Author: mongoose.Types.ObjectId(req.user._id),
        Ques: req.body.QuesTitle,
        Description: req.body.QuesDetail,
        Tags: req.body.Tags.split(" "),
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

router.post("/ques/addAns/:id",function(req,res){
    const ans = req.body;
    const ques = req.params;
    console.log(ans, ques);
    const newAns = new Ans({
        quesId: mongoose.Types.ObjectId(req.params.id),
        Author: req.user._id,
        answer: req.body.answer,
        Date: new Date(),
        upvote: Number,
        downvote: Number
    })
})

router.get("/ques/q/:id",function(req,res){
    // const returnJson = {"Ques":{} , "Answer":[]}
    Ques.findOne({_id:mongoose.Types.ObjectId(req.params.id)},function(err,docs){
        if(!err){

            res.json(JSON.stringify(docs));
            // returnJson.Ques=docs;
        }
    })
    // Ans.find({quesId:req.params.id} ,function(err,docs){
    //     if(!err){
    //         console.log(docs);
    //         returnJson.Answer=docs;
    //     }
    // })
    // res.json(returnJson);
})







module.exports = router