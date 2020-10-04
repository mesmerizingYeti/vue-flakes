const { Flake } = require("../models")

module.exports = app => {

  // READ all flakes
  app.get("/api/flakes", (req, res) => {
    Flake.find()
      .then(flakes => res.json(flakes))
      .catch(err => console.log(err))
  })

  // READ one flake
  app.get("/api/flakes/:id", (req, res) => {
    Flake.findOne({ _id: req.params.id })
      .then(flake => res.json(flake))
      .catch(err => console.log(err))
  })

  // CREATE one flake
  app.post("/api/flakes", (req, res) => {
    Flake.create(req.body)
      .then(flake => res.json(flake))
      .catch(err => console.log(err))
  })

  // UPDATE one flake
  app.put("/api/flakes", (req, res) => {
    console.log(req.body)
    Flake.updateOne({ _id: req.body._id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  })

  // DELETE one flake
  app.delete("/api/flakes/:id", (req, res) => {
    Flake.deleteOne({ _id: req.params.id})
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  })

}