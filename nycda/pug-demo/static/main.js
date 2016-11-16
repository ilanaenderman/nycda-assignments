console.log("main.js works")

$(document).ready(function() {
	console.log ("DOM loaded")
	if (Cookies.get('visited') == undefined) {
	Cookies.set('visited', 'true')
	$('#container').html( "<h1>Welcome Stranger</h1>")
	}
	else  {
		$('#container').html( "<h1>Welcome back</h1>")
	}
})