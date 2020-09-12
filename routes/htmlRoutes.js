module.exports = app => {

  // catch all for vue front end
  app.get('*', (req, res) => {
    res.redirect('/')
  })

}