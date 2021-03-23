// import de la biblioteca mongoose
const mongoose = require('mongoose')

// constante con la URL de coneccion donde sustituimos <user> y <password>
const uri = `mongodb+srv://rurickdev:passPetDairy@cluster0.xrwd8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// exportamos la funcion que hace la conexión para utilizarla en otro archivo
module.exports = () => mongoose.connect(
  uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
