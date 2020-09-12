module.exports = (model, Schema) => {
  const Excuse = new Schema({
    excuse: String,
    severity: Integer
  }, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  })

  return model('Excuse', Excuse)
}