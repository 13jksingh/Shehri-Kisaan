const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const findOrCreate = require("mongoose-findorcreate")

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model('userdb', userSchema);