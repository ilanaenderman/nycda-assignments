const express = require('express')
const app 	  = express()

console.log('starting app')

app.use( '/resources', express.static('static') )

app.get ('/', (req, res) =>{
	console.log('Someone opened the main page')
	res.send( 'I work')
})

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/static/index.html')
})

app.listen(8000, () =>{
	console.log('Express listening')
})