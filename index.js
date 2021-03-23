// importamos la funcion exportada desde database.js
const dbConnect = require('./src/lib/database')
// importamos nuestra app de express
const app = require('./src/app.js')

// dentro de [main] podemos poner todas las
// funciones asíncronas que necesitemos
async function main() {
	await dbConnect() // await hace que se espere a terminar de ejecutar
	console.log('DB Connected')

	// inicializamos la app de express
	app.listen(8080, () => {
		console.log('App listening at http://localhost:8080')
	})
}

// ejecutamos y esperamos a [main]
main().then(() => {
	console.log('Server Ready')
})

