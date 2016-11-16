///Country app module
var fs = require("fs")

//function that reads the country.json file
function readFile(nameFile, callback){
	fs.readFile(__dirname + '/countries.json','utf-8', function(err,data){
		if (err){
			console.log('an error occured')
			throw err
	} //this part makes the function read the total json file

	var jsonContent = JSON.parse(data) //the data that is parsed
	callback(jsonContent)
})}

module.exports = readFile  //exports this function. Makes it able to be called in the app