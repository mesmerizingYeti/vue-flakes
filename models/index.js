const { model, Schema } = require('mongoose')

const User = require('./User')(model, Schema)
const Flake = require('./Flake')(model, Schema)
const Event = require('./Event')(model, Schema)

module.exports = { User, Flake, Event }