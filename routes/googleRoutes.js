const Google = require("../controllers/google");

module.exports = app => {

  app.get("/api/calendars", (req, res) => {
    const { accessToken: access_token } = req.user;
    // Had to change the name of the access token variable to work with Google APIs
    Google.getCalendars({ access_token })
      .then(({ data }) => res.json(data))
      .catch(err => console.log(err))
  })

  app.get("/api/calendar_events/:id", (req, res) => {
    const { accessToken: access_token } = req.user;
    Google.getEvents(req.params.id, { access_token })
      .then(response => res.json(response))
      .catch(err => console.log(err))
  })

}