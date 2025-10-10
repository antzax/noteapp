const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    require: true,
  },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__vd
  },
})

module.exports = mongoose.model('Note', noteSchema)
