const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
const User = require("../models/user");

router.post("/register", function (req, res) {
  User.register(new User({ email: req.body.email, username: req.body.username }), req.body.password, function (err, user) {
      if (err) {
          res.json({ success: false, message: "Your account could not be saved. Error: " + err });
      }
      else {
          req.login(user, (er) =>{
              if (er) {
                  res.json({ success: false, message: er });
              }
              else {
                  res.json({ success: true, message: "Your account has been saved" });
              }
          });
      }
  });
});

router.post("/login", function (req, res) {
  if (!req.body.username) {
      res.json({ success: false, message: "Username was not given" })
  }
  else if (!req.body.password) {
      res.json({ success: false, message: "Password was not given" })
  }
  else {
      passport.authenticate("local", function (err, user, info) {
          if (err) {
              res.json({ success: false, message: err });
          }
          else {
              if (!user) {
                  res.json({ success: false, message: "username or password incorrect" });
              }
              else {
                  const token = jwt.sign({ userId: user._id, username: user.username }, secretkey, { expiresIn: "24h" });
                  res.json({ success: true, message: "Authentication successful", token: token });
              }
          }
      })(req, res);
  }
});

router.get("/login/success",(req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router