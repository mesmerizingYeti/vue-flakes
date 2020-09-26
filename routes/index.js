module.exports = app => {
  require('./authRoutes')(app)
  require("./excuseRoutes")(app)
  require("./eventRoutes")(app)
  require('./htmlRoutes')(app)
}