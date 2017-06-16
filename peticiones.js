fetch("http://teambits.herokuapp.com/user/login", {
	method: "POST",
	headers: {
		"Content-type": "application/x-www-form-urlencoded"
	},
	body: "name=prueba&password=pru3b4"
}).then( function (r) {
	return r.text()
}).then( function (data) {
	console.log(data)
})
