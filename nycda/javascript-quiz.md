Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.
- Finally, we will go over the answers in class. Write down your revised answer below your original answer.


---
### Part 1: Control Flow - 15 minutes

1. Write an if statement. Name each of the components and how they work together.

var age = 18 //variable to fill in a number that resembles an age

if(age < 18){
	console.log('To young to drink') //if age number is smaller than 18 it will console 'to young to drink'
}

else{
	console.log('Allowed to drink') //otherwise the age number is 18 or higher and it will console 'allowed to drink'
}


2. Write a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.

var fruit = ['Apple' , 'Lemon', 'Pear'] //variable fruit gives an array

for (var i = 0; i < fruit.length; i++){ 	//For loop is used to go through the array. fruit.length gives the amount of values in the array. 
console.log( " I love " + fruit[i] + "s") 	// fruit[i] i will be replaced with a number, that number is equal to one of the values in the fruit variable.
}											// than is will console the all fruit with text that is added 


3. Functions
 - 3a. Write a function. Describe each of its components and what each component does. Specify which of them are optional.

function addTogether (x,y) {   //function named addTogether with two parameters. the parameter will be called later and repaced with different values
	console.log ( x + y )	//it will console x and y added together. the + componant is optinal, it can be replaced with for instance *
}

 - 3b. Write a function being called, showing the instruction execution order.

function greetPerson (name){ //function named greetPerson, with one parameter.
	console.log("Hello " + name + ", how are you?") //consoles the name that is called with text that is added
}

greetPerson('Elia') //write name of the function with new parameter to call the function. 
greetPerson('Yara') //write name of the function with new parameter to call the function. 



---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
 - 4a. Give an example of an empty string and a non-empty string.
string:			var string = "Hello"
empty string:	var emptyString = ""

 - 4b. Give an example of a boolean.
Boolean (10<100) // returns true
Boolean (5>2)	// returns false

 - 4c. Give an example of a Number.
 number:	var number = 5


5. Arrays
 - 5a. Give an example of an empty array.
var emptyArray = []

 - 5b. Give an example of an array with three elements in it.
var array = ['giraffe', 'lion', 'monkey']

 - 5c. How do you add another element to this array?
array.push('elephant')
or 
array[3] = 'elephant'

console.log(array)

 - 5d. How do you get the length of this array?
console.log (array.length)

 - 5e. Show how to iterate through the array using a loop.
var animal = ['giraffe', 'lion', 'elephant']
for (var i = 0; i < animal.length; i++){ 
	console.log("I love " + animal[i] + "s")
	}


 
6. Objects
 - 6e. Give an example of an empty object.
var person = {}

 - 6b. Give an example of an object with three keys and three values.
var bike = {
	name: 'Gazelle'
	color: 'red'
	brakes: 'back-pedal'
}

 - 6c. Give an example of an object with two keys and two functions as values.
var object = {
	createGreeting: function(name){ console.log("Hello, " + name)},
	newWord: function(word1, word2){console.log(word1+word2)}
}

 - 6d. Describe one way of adding a key to an object.
var bike = {
	name: 'Gazelle',
	color: 'red',
	brakes: 'back-pedal'
}

bike.age = "5 years" // dot notation: nameObject.newKey = "newValue"

console.log(bike)

 - 6e. Describe the other way of adding a key to an object.
bike["age"] = "5 year"  // bracket notation: nameObject [" newKey "] = "newValue"

 - 6f. Explain the difference between these two ways, and when it is appropriate to use each way.
I don't know


 - 6g. Describe how to iterate though an object using a loop.
var bike = {
	name: 'Gazelle',
	color: 'red',
	brakes: 'back-pedal'
}

for(var key in bike){  //use the for in loop. it will go through the keys in you object en show you the key
	console.log(key)
}


---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?
I don't know

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.
```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
	// 'orange' returns '1'
	// 'durian' returns '-1'
```

You first need to create an array and give it values. Than you make a function that will tell you the location by looping through the array untill it finds the value that the paramenter is equal to. I than returns the the number of the value. You use an when loop. If value is equal to parameter it will return the number of the array. When this is false it will continue to the next return.


var fruit = ['apple', 'orange', 'banana', 'lemon']

function locationValue(value){
	for(var i = 0; i < fruit.length; i++){
	while(fruit[i] == value){
	return(i)}
	}
	return("-1")

}

locationValue('lemon')


9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.
```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
	// 'orange' returns [1,2]
```


Make a function that pushed the outcomes of the for loop in an array. 

var fruit = ['apple', 'lemon', 'banana', 'lemon']

function locationValue(value){
		var location = []
		for(var i = 0 ; i < fruit.length ; i++){
		while(fruit[i] == value){
		location.push(i)
		return(location)
}}}

locationValue('lemon')


Don't know how to get more elements in the array. 








