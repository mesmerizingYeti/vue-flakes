const Google = require("../controllers/google");

module.exports = app => {

  app.get("/api/calendars", (req, res) => {
    const { accessToken, refreshToken } = req.user;
    Google.getCalendars({ accessToken, refreshToken })
      .then(response => res.json(response))
      .catch(err => console.log(err))
  })

}