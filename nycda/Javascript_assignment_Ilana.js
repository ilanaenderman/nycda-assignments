//function that adds three parameters

function returnSum( a, b, c ){ 
	return a + b + c
}

//call function
console.log(returnSum(5, 7, 9 ))
console.log(returnSum(1, 2, 3 ))

//give last letter of the string
function lastCharacter( string ){
	return string.charAt(string.length -1)
}

//call function
lastCharacter("Ilana Banana")


//cube counter
function cubeCounter(number){
	this.number = number
	this.number2 = number * number
	return number2 * number
}

//call function
console.log(cubeCounter(5))
console.log(cubeCounter(3))


//function that reverse string
function reverse(string) {
  var o = []
  for (var i = string.length - 1; i >= 0; i--)
    o += string[i]
  return o
}

//call function
reverse("Hello World")


//function that makes objects out of arrays
var array1 = ["first name", "last name", "age", "city"]
var array2 = ["Larry", "King", "88 years", "New York"]

function createObject(x,y){
	var newObject = {}
	for(var i=0; i<array1.length; i++){
		newObject[x[i]] = y[i]
	}
return newObject 
}
	
//call function
createObject(array1,array2)  


//function that makes arrays out of objects and than makes a new object out of the arrays
//object
var person = {
	firstName: "Harry",
	lastName: "Potter",
	age: "27 years",
	school: "Hogwarts",
}

//function 
function newObjectMaker(object){
	var keyTaker = Object.keys(object) //makes array out of the object keys, made a var out of it to call it later

	var valueTaker = [];   //made var with array where values will be pushed to
	for (var key in object) //initalizing through object
   		 valueTaker.push(object[key]); //pushing values into array

	var newObject = {} //push arrays in an object
	newObject["keys"] = keyTaker //push key array
	newObject["values"]= valueTaker //push value array
	console.log(newObject)

}

newObjectMaker(person) 















