// importamos la libreria express
const express = require('express')
// importamos los casos de uso de Entry
const entry = require('./usecases/entry')

// instanciamos nuestra app
const app = express()

// el metodo get recibe la ruta y la funcion callback que se ejecuta
// cuando se llega a ese endpoint
app.get('/', (req, res) => {
  res.send('Hello Koders')
})

// Endpoints de las entradas

// hacemos que [app] escuche las peticiones a /entries con el metodo POST
app.post('/entries', async (req, res) => {
  // Sacamos la informacion del body de la peticion
  const entry = req.body
  // Creamos una entrada usando el caso de uso
  const entryCreated = entry.create(entry)
  // respondemos con un json que indica si todo funciono
  response.json({
    success: true,
    message: 'Entry Created',
    data: {
      entry: entryCreated
    }
  })
})

// hacemos que [app] escuche las peticiones a /entries/:id con el metodo GET
app.get('/entries/:id', async (req, res) => {
  // Sacamos el id de los parametros de la peticion
  const { id } = req.params
  // Obtenemos la entrada usando el caso de uso
  const entryFound = entry.getById(id)
  // respondemos con un json que indica si todo funciono
  response.json({
    success: true,
    message: 'Entry Found',
    data: {
      entry: entryFound
    }
  })
})

// hacemos que [app] escuche las peticiones a /entries con el metodo GET
app.get('/entries', async (req, res) => {
  // Obtenemos las entradas usando el caso de uso
  const entries = entry.getAll()
  // respondemos con un json que indica si todo funciono
  response.json({
    success: true,
    message: 'Entries Found',
    data: {
      entries: entries
    }
  })
})

// hacemos que [app] escuche las peticiones a /entries/:id con el metodo DELETE
app.delete('/entries/:id', async (req, res) => {
  // Sacamos el id de los parametros de la peticion
  const { id } = req.params
  // Boramos la entrada usando el caso de uso
  const entryDeleted = entry.deleteById(id)
  // respondemos con un json que indica si todo funciono
  response.json({
    success: true,
    message: 'Entry Deleted',
    data: {
      entry: entryDeleted
    }
  })
})

// hacemos que [app] escuche las peticiones a /entries/:id con el metodo PATCH
app.patch('/entries/:id', async (req, res) => {
  // Sacamos el id de los parametros de la peticion
  const { id } = req.params
  // Sacamos la informacion del body de la peticion
  const newData = req.body
  // Actualizamos la entrada usando el caso de uso
  const entryUpdated = entry.updateById(id, newData)
  // respondemos con un json que indica si todo funciono
  response.json({
    success: true,
    message: 'Entry Updated',
    data: {
      entry: entryUpdated
    }
  })
})

module.exports = app