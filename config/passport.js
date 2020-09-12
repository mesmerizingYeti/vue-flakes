const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const { User } = require('../models')

// input the user, output the user's id
passport.serializeUser((user, cb) => {
  cb(null, user._id)
})

// input the user's id, output the user
passport.deserializeUser((_id, cb) => {
  User.findById(_id)
    .then((user) => cd(null, user))
    .catch((err) => cb(err))
})

passport.user(new GoogleStrategy({
  // options for google strategy
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, cb) => {
  // deconstruct profile data
}))

