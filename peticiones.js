fetch("http://25.6.54.24:8080/user/login", {
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
