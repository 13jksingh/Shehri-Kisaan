const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/user");

const GOOGLE_CLIENT_ID ="507319380545-s0co8j0otbmg9u26ak94urrmp3j5qqkt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOrCreate({ googleId: profile.id, username: profile.name.givenName }, function (err, user) {
        return done(null, profile);;
      });

    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});