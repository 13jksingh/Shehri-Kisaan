const mongoose = require("mongoose");
 
module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(
        "mongodb+srv://jksingh13:123@sherikisaan.s5fjpto.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => (err ? console.log(err) :console.log(" Mongoose is connected"))
      );
  },

  getDb : mongoose.connection
};