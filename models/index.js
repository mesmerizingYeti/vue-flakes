const { model, Schema } = require('mongoose')

const User = require('./User')(model, Schema)
const Excuse = require('./Excuse')(model, Schema)
const Event = require('./Event')(model, Schema)

module.exports = { User, Excuse, Event }