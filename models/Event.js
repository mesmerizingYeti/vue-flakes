module.exports = (model, Schema) => {
  const Event = new Schema({
    event: String,
    flake: {
      type: Schema.Types.ObjectId, 
      ref: 'Flake'
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    start: String,
    end: String,
    google_calendar_id: String,
    google_event_id: String,
  })

  return model('Event', Event)
}