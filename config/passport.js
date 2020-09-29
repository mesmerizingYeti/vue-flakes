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
    .then((user) => cb(null, user))
    .catch((err) => cb(err))
})

passport.use(new GoogleStrategy({
  // options for google strategy
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
  accessType: 'offline'
}, (accessToken, refreshToken, profile, cb) => {
  // deconstruct profile data
  const { sub: google_id, name: username, picture } = profile._json;
  User.findOne({ google_id })
    .then(user => {
      // found user in database
      if (user) {
        // update user with new access token
        User.updateOne({ google_id }, { accessToken, refreshToken })
          .then(() => cb(null, user))
          .catch(err => cb(err))
      } else {
        // otherwise, create new user
        const newUser = {
          username,
          google_id,
          picture,
          events: [],
          accessToken,
          refreshToken
        };
        User.create(newUser)
          .then(user => cb(null, user))
          .catch(err => cb(err))
      }
    })
    .catch(err => cb(err))
}))

