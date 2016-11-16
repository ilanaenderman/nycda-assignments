//including the necesarry modules
const express 	= require( 'express' )
const fs 	  	= require( 'fs' )
const app	  	= express()
const bodyParser= require('body-parser' )

app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )
app.use(express.static('static'))


// parse application/json 
app.use( bodyParser.json() )


// Index page with user list
app.get( '/', (request, response) => {
	console.log( 'Render index')
	fs.readFile(__dirname + '/users.json', (error, data) => {
		if ( error ) throw error
			let parsedData = JSON.parse( data )
		response.render( 'index', {data: parsedData} )

	} )
} )

// Search page 
app.get( '/search', (request, response) => {
	response.render( 'search' )
})


app.post( '/searchAutocomplete', bodyParser.urlencoded({extended: true}), (request, response) => {
	let inputSearch = request.body.input
	fs.readFile( __dirname + '/users.json', ( error, data ) => {
		if ( error ) {
			response.send(error)
		} 
		let parsedData = JSON.parse( data )

		let result = []

		for(let i = 0 ; i < parsedData.length; i++){ // searching for all letters use > -1
			if(parsedData[i].firstName.indexOf(inputSearch) == 0 || parsedData[i].lastName.indexOf(inputSearch) == 0) {
				result.push(parsedData[i])
			}
		}
		console.log(result)
		response.send( {data: result} )
	})
})

// parse application/x-www-form-urlencoded 
app.use( bodyParser.urlencoded( { extended: false } ) )



// Search result page 
app.post( '/search', (request, response) => {
	let inputSearch = request.body.nameInput
	fs.readFile( __dirname + '/users.json', ( error, data ) => {
		let user = []
		if ( error ) throw error
			let parsedData = JSON.parse( data )

		for ( let i = 0; i < parsedData.length; i++ ){
			if ( inputSearch == parsedData[i].firstName || inputSearch == parsedData[i].lastName ) {
				user.push( parsedData[i])
			}
		}
		response.render( 'searchResult', {user: user} )
	} )
} )

// Add new user page
app.get( '/addUser', (request, response) => {
	console.log('Render addUser' )
	response.render( 'addUser' )
} )

// Put new user in Index page list
app.post( '/addUser', (request, response) => {
	let fname = request.body.firstname
	let lname = request.body.lastname
	let email = request.body.email
	let newUser = { "firstName": fname, "lastName": lname, "email": email }
	fs.readFile(__dirname + '/users.json', (error, data) => {
		if ( error ) throw error
			let parsedData = JSON.parse( data )
		parsedData.push(newUser)
		fs.writeFile(__dirname + '/users.json', JSON.stringify(parsedData), (error) => {
			if (error) throw error
				response.redirect( '/')
		})
	})
})


app.listen(8000, () => {
	console.log( 'Server running' )
} )

