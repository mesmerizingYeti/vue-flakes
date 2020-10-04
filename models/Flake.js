module.exports = (model, Schema) => {
  const Flake = new Schema({
    excuse: String,
    severity: Number
  }, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  })

  return model('Flake', Flake)
}