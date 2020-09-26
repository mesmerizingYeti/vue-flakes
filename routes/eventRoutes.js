const { Event } = require("../models")

module.exports = app => {

  // READ all user events
  app.get("/api/events", (req, res) => {
    if (!req.user) {
      res.sendStatus(400)
    }
    Event.find({ user: req.user._id })
      .then(events => res.json(events))
      .catch(err => console.log(err))
  })

  // READ one event
  app.get("/api/events/:id", (req, res) => {
    Event.findOne({ _id: req.params.id })
      .then(event => res.json(event))
      .catch(err => console.log(err))
  })

  // CREATE one event
  app.post("/api/events", (req, res) => {
    Event.create(req.body)
      .then(event => res.json(event))
      .catch(err => console.log(err))
  })

  // UPDATE one event
  app.put("/api/events", (req, res) => {
    console.log(req.body)
    Event.updateOne({ _id: req.body._id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  })

  // DELETE one excuse
  app.delete("/api/excuses/:id", (req, res) => {
    Excuse.deleteOne({ _id: req.params.id})
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  })

}