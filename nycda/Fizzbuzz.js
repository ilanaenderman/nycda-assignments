//For loop program that prints the number from 1 to 100. 
//But for multiples of 3 the program prints Fizz instead of the number
//and for the multiples of 5 it prints Buzz. 
//For numbers which are multiples of both 3 and 5 it prints FizzBuzz."
for(var i=1; i<=100; i++){ 
	if( (i%3) === 0 && (i%5) === 0){  // multiples of 3 and 5
	} else if( (i%3) === 0){ // multiples of 3
		console.log("Fizz");
	} else if( (i%5) === 0){ // multiples of 5
		console.log("Buzz");
	} else{console.log(i); // remaining numbers
	}
}