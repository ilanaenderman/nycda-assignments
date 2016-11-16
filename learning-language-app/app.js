// required libraries
const sequelize = require ('sequelize')
const express	= require ('express')
const pg 		= require ('pg')
const session	= require ('express-session')
const app		= express ()


//set connection
let db = new sequelize( 'postgres://floriandalhuijsen@localhost/learn')

//define models
let User = db.define( 'user', {
	name: sequelize.STRING,
	fluent: sequelize.STRING,
	learn: sequelize.STRING
})

let Fluent = db.define('fluent', {
	name: sequelize.STRING
})

let Learn = db.define('learn', {
	name: sequelize.STRING
})

//define relations
User.hasMany( Fluent )
User.hasMany( Learn )


//set express routes
app.get('/users', (req, res) => {
	User.findAll({
		attributes: ['name'],
		include: [{
			model: Learn,
			attributes: ['name']
		},{
			model: Fluent,
			attributes: ['name']
		}]
	}).then( users => {
		res.send( users )
	})
})

app.get('/learn', (req, res) => {
	User.findAll({
		where: { name: 'Darcie'}, //request.session.user
		attributes: ['learn']

	}).then( desire => {
		var result = []
		for( var i = 0; i < desire.length; i++){
			result.push(desire[i].learn)
		}
		return result

	}).then( desire => {
		Fluent.findAll({
			where: {name: desire},
			attributes: ['userId']

		}).then( desire  => {
			var newResult = []
			for( var i = 0; i < desire.length; i++) {
				newResult.push(desire[i].userId)
			}
			return newResult

		}).then( desire => {
			User.findAll({
				where: {id: desire},
				attributes: ['name']

		viM	}).then( desire => {
				console.log( desire)
				res.send(desire)
			})
		})
	})
})

//sync tables
db.sync( {force:true} ).then( db => {
	console.log( 'synced')
	
	//create Users
	User.create({
		name: 	'Ilana',
		fluent: 'Spanish',
		learn: 'French'
	}).then( user  => {
		user.createFluent({ 
			name: 'Spanish'
		})
		user.createFluent({
			name: 'English'
		})
		user.createLearn({
			name: 'French'
		})
	})

	User.create({
		name: 	'Florian',
		fluent: 'Spanisht',
		learn: 'Portugese'
	}).then( user => {
		user.createFluent({
			name: 'Spanish'
		}) 
		user.createLearn({
			name: 'Portuguese'
		})
	})

	User.create({
		name: 	'Darcie',
		fluent: 'Portuguese',
		learn: 'Spanish'
	}).then( user => {
		user.createFluent({
			name: 'Portuguese'
		})
		user.createLearn({
			name: 'Spanish'
		})
	})
})

app.listen(8000, () => {
	console.log('server running')
})