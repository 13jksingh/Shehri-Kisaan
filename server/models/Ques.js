const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
    Author: String,
    Ques: String,
    Description: String,
    Tags: String,
    Date : Date,
    Answers : [String]
});

module.exports = mongoose.model('quesDB', quesSchema);