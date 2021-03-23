// importamos mongoose
const mongoose = require('mongoose')

// declaramos el esquema vacio
const entrySchema = mongoose.Schema({
  // titulo de la netrada en tipo string
  title: {
    type: String,
    required: true
  },
  // nombre de la mascota en tipo string
  petName: {
    type: String,
    required: true
  },
  // contenido de la entrada en tipo string
  content: {
    type: String,
    required: true
  },
  // fecha de la entrada en tipo Date
  // tiene un valor por defecto para no tener que
  // ingresar la fecha a mano cada vez
  date: {
    type: Date,
    default: new Date()
  },
})

// exportamos el esquema como un modelo
module.exports = mongoose.model('Entry', entrySchema)