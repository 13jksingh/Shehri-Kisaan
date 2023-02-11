const cookieSession = require("cookie-session");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
require("dotenv").config({ path: "./config.env" });
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

const dbo = require("./db/conn");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);


app.get("/logout", function(req, res){
  req.logout();
  res.redirect("http://localhost:3000/");
});

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(dbo.getDb.collections)
    console.log(`Server is running on port: ${port}`);
  });