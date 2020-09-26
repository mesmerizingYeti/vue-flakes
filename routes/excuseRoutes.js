const { Excuse } = require("../models")

module.exports = app => {

  // READ all excuses
  app.get("/api/excuses", (req, res) => {
    Excuse.find()
      .then(excuses => res.json(excuses))
      .catch(err => console.log(err))
  })

  // READ one excuse
  app.get("/api/excuses/:id", (req, res) => {
    Excuse.findOne({ _id: req.params.id })
      .then(excuse => res.json(excuse))
      .catch(err => console.log(err))
  })

  // CREATE one excuse
  app.post("/api/excuses", (req, res) => {
    Excuse.create(req.body)
      .then(excuse => res.json(excuse))
      .catch(err => console.log(err))
  })

  // UPDATE one excuse
  app.put("/api/excuses", (req, res) => {
    console.log(req.body)
    Excuse.updateOne({ _id: req.body._id }, req.body)
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