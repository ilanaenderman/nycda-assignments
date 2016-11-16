// Country information app

var fs = require('fs')

var country = require(__dirname + '/json-file-reader')


var name = process.argv[2] //made a var out of it to use it in the loop

country(__dirname +'/countries.json', function (jsonContent ){
		for( var i = 0; i < jsonContent.length; i++){  //for loop to go through the total file
			if(jsonContent[i].name == name){  //if loop to make the for loop stop when it finds the name you put in the readCountry function.
			console.log("country: " + jsonContent[i].name) //than it will print out the name of the country
			console.log("top level domain: " + jsonContent[i].topLevelDomain) // than it will print out the top leven domain of the country
		}
	}
})




