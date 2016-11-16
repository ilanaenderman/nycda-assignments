//including the necesarry modules
const express = require( 'express')
const fs 	  = require( 'fs')
const app	  = express()



app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views')
app.use(  express.static(__dirname + '/static'))


app.get('/', (request, response) => {
	console.log( 'About to render a pug page!')
		response.render( 'index' )
})


app.listen(8000, () => {
	console.log('Server running')
})