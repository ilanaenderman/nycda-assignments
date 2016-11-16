//part 1
//function that creates a sum by adding the numbers
function findSum( firstnumber, secondnumber){  
	return firstnumber + secondnumber
}

//function that finds a product by multiplying the numbers
function findProduct(firstnumber, secondnumber){ 
	return firstnumber * secondnumber
}

//part 2
// threeOperation is able to call previous functions
function threeOperation( x, operation ){
	return operation( 3, x )  
}

//part 3
//call operation
console.log(threeOperation( 4, findSum))
console.log(threeOperation( 5, findSum))
console.log(threeOperation( 4, findProduct))
console.log(threeOperation( 5, findProduct))