const passport = require('passport')

module.exports = app => {

  // Check authentication success
  app.get("/auth/authenicated", (req, res) => {
    if (req.user) {
      res.json({
        isAuthenticated: true,
        message: "User authenticated",
        user: req.user,
        cookies: req.cookies
      })
    } else {
      res.json({
        isAuthenticated: false,
        message: "User not authenticated",
        user: null,
        cookies: null
      })
    }
  })

  // Logout and redirect to login page
  app.get("/auth/google",
    passport.authenticate("google", {
      scope: ['profile', 'email', 'calendar']
    })
  )

  // When google sign in fails, send fail message
  app.get("/auth/signin/failure", (req, res) => {
    res.status(401).json({
      success: false,
      message: "Failed to sign in"
    })
  })

  // Google callback url
  app.get("/auth/google/redirect". passport.authenticate("google", {
    successRedirect: process.env.GOOGLE_SUCCESS_REDIRECT || "http://localhost:8080/",
    failureRedirect: "/auth/signin/failure"
  }), (req, res) => {
    res.json(req.user)
  })

}