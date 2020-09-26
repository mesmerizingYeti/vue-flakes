require('dotenv').config()
require('./config').config()
const express = require('express')
const { join } = require('path')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const passport = require('passport')

let PORT = process.env.PORT || 3001
let app = express()

// middleware
app.use(express.static(join(__dirname, 'client', 'dist')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// cookie setup
app.use(
  cookieSession({
    maxAge: 60 * 60 * 24 * 1000,
    keys: [process.env.SECRET_KEY]
  })
)

app.use(cookieParser())

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

// setup cors
app.use(
  cors({
    // allow server to accept requests from different origin
    origin: "http://localhost:3000", 
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    // allow session cookie from browser to pass through
    credentials: true
  })
)

// server routes
require('./routes')(app)

// connect to db, then start server
require('mongoose')
  .connection
  .once('open', () => app.listen(PORT))