const mongoose = require("mongoose");

const ansSchema = new mongoose.Schema({
    quesId : String,
    Author: String,
    answer: String,
    Date : Date,
    upvote : Number,
    downvote : Number
});

module.exports = mongoose.model('ansDB', ansSchema);