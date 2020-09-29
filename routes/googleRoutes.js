const Google = require("../controllers/google");

module.exports = app => {

  app.get("/api/calendars", (req, res) => {
    const { accessToken } = req.user;
    // Had to change the name of the access token variable to work with Google APIs
    Google.getCalendars({ access_token: accessToken })
      .then(({ data }) => res.json(data))
      .catch(err => console.log(err))
  })

}