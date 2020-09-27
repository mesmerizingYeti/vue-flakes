module.exports = (model, Schema) => {
  const User = new Schema({
    username: String,
    google_id: {
      type: String,
      required: true,
      unique: true
    },
    picture: String,
    accessToken: String,
    refreshToken: String,
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
  }, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  })

  return model('User', User)
}