ff//prototype practice
//create an email list
function EmailList ( name ){ //create prototype
	this.namelist = name 
	this.list = [] 
	this.addEmail = function (email){ // push mail address to this.list
		this.list.push(email)
	}
	this.sendEmailToAll= function(content){
		console.log("Email content:" + "\n" + content ) //print content
		for(var i=0; i < this.list.length; i++){  // use for loop to print array with all mail addresses
		console.log("Sending email to:" + "\n" + this.list [i] ) }// prints that the mail has been send to whole mail list
	}
}

var newMember = new EmailList("Ilana's mailing list") //instance
console.log(newMember.namelist) // print name of EmailList
newMember.addEmail("ilana@gmail.com")
newMember.addEmail("enderman@gmail.com")
newMember.sendEmailToAll("hello world")

//function1 that returns the area of a circle
function calculateCircleArea( r ){ 
	return (r * r ) * Math.PI 
}

//call and print function
console.log(calculateCircleArea(5)) // result will be around 78
console.log(calculateCircleArea(10)) // result will be around 314

//function that returns last letter of a string

function lastCharacter( string ){
	return string.charAt(string.length -1)
}
lastCharacter("cattywampus") //call function

//function that print stars
function starPrinter( length ){
	var string = "*"
	return string.repeat( length )
	}

//call and print function
console.log( starPrinter (3) )
console.log( starPrinter (5) )

//function that print square of stars
function squareStarPrinter( length ){ 
	var string = "*" 
	var repeater = string.repeat( length ) //repeat stars first time
	var repeater2 = repeater + "\n" //add a new line 
	return repeater2.repeat( length ) //repeat stars second time
}

//call function
console.log( squareStarPrinter(3))
console.log( squareStarPrinter(5))
console.log( squareStarPrinter(7))

//function that gives the average of an array of integers

function averageFinder(array){
	var sum = 0; 
	for( var i = 0; i < array.length; i++) { // goes over all the numbers in the array
		sum += array [i] 
		}//devides sum by the amount of numbers in the array
	console.log(sum / i)
}

// call and print

averageFinder([3,4,5,6,8,9,10])
averageFinder([7,25,8,23])