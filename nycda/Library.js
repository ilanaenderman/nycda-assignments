//part 1 object book. Object with an array in the body

var book1 = {
	title: "Surviving the world", 
	body:["How to survive in the jungle", "How to survive in the dessert", "How to survive in the mountains"]
	}

//part 2 object bundle. Object with an array in the body
var bundle= {
	title: "Stories by Roald Dahl",
	body: ["The BFG", "Willy Wonka & the Chocolate Factory", "James and the Giant Peach"] 
}

//part 3 Infinite Jest

// object
var book2 = {
	title: "Infinite Jest",
  	body: ["Written by David Foster Wallace", "Hal Incandenza is the youngest of the Incandenza children.", "As a child, he was very precocious."] //array within the object
}

// Read book
function readBook2(book2){
  console.log("Title: " + book2.title) // seperate the properties so you can console the title seperate of the array(pages)
  for(var i=0; i<book2.body.length; i++){ //for loop because you know it has to run the full body lenght of the array, which is 3 times
    console.log("Page "+ (i+1) + ": "+ book2.body[i]) //As array starts at 0, but pages at 1 you at i+1
  }
}

// call function
readBook2(book2)