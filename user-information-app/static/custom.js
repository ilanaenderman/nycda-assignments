
//Search 
$(document).ready( function () {
	$("#provider-json").keyup( () => {
		if( timer() ){

		var letter = { 
			input: $("#provider-json").val()
		}
		if( $('#provider-json').val() == "" ){
			$('#result').html(" ")
		}
		else {
			$.post("/searchAutocomplete", letter, (response) => {
				$('#result').html("")
				for( var i = 0; i < response.data.length; i++) {
					$("#result").append(response.data[i].firstName + " " + response.data[i].lastName + ": " + response.data[i].email + "<br>")
				}
			})
		}
	} else {console.log("false")}
	})
})


//bandwidth optimalization


var oldTime = 0
function timer() {
	var newTime = Date.now()
	var interval= newTime - oldTime
	if(interval > 300){
		oldTime = newTime
		console.log("true")
		return true
	} 
	else {
		oldTime = newTime
		console.log("false")
		return false

	}
}

