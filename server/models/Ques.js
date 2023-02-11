const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
    Author: String,
    Ques: String,
    Description: String,
    Tags: [String],
    Date : Date,
    likes : Number,
    dislikes :Number,
    Answers : Number
});

module.exports = mongoose.model('quesDB', quesSchema);