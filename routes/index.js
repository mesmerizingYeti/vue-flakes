module.exports = app => {
  require("./excuseRoutes")(app)
  require('./htmlRoutes')(app)
}