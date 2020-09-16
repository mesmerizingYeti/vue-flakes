module.exports = (model, Schema) => {
  const Event = new Schema({
    event: String,
    excuse: {
      type: Schema.Types.ObjectId, 
      ref: 'Excuse'
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    start: String,
    end: String,
    calendar_id: String,
  })

  return model('Event', Event)
}