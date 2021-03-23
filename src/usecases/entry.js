// importamos el modelo
const Entry = require('../models/entry')

// funcion asincrona para crear entradas
// recibe un objeto que trae la informacion de la entrada
async function create(entry) {

  // extraemos la informacion de la entrada
  const { title, petName, content } = entry

  // Creamos una entrada usando el modelo y pasando
  // las propiedades en un nuevo objeto
  const entryCreated = await Entry.create({
    title,
    petName,
    content
  })

  // retornamos la entrada creada
  return entryCreated
}

// funcion asincrona para leer entradas
// recibe el id de la entrada
async function getById(id) {

  // Buscamos una entrada usando el modelo y pasando el id
  const entryFound = await Entry.findById(id)

  // retornamos la entrada encontrada
  return entryFound
}

// funcion asincrona para leer entradas
async function getAll() {

  // Buscamos las entradas usando el modelo
  const entriesFound = await Entry.find()

  // retornamos las entradas encontradas
  return entriesFound
}

// funcion asincrona para borrar entradas
// recibe el id de la entrada
async function deleteById(id) {

  // Buscamos una entrada y la borramos usando el modelo y pasando el id
  const entryFound = await Entry.findByIdAndDelete(id)

  // retornamos la entrada borrada
  return entryFound
}

// funcion asincrona para actualizar entradas por id
// recibe un objeto que trae la nueva informacion y id de la entrada
async function updateById(id, newData) {

  // extraemos la nueva informacion de la entrada
  const { title, petName, content } = newData

  // Actualizamos una entrada usando el modelo y pasando
  // las propiedades en un nuevo objeto
  // si alguna de las propiedades no existe el modela la ignora
  const updatedEntry = await Entry.findByIdAndUpdate(id, newData)

  // retornamos la entrada actualizada
  return updatedEntry
}

module.exports = {
  create,
  getById,
  getAll,
  deleteById,
  updateById,
}