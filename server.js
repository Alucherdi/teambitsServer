const express = require("express")
var session = require("express-session")
const cors = require("cors")
const app = express()
var mongoose = require("mongoose")
var bodyParser = require("body-parser")

var nodemailer = require("nodemailer")

var User = require("./models/user")
var Career = require("./models/careers")
var New = require("./models/news")
var Note = require("./models/notes")
var Reference = require("./models/references")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
	secret: "asdf"
}))

mongoose.connect("mongodb://alucherdi:mundoweb666@ds021346.mlab.com:21346/alucherdi_mdb", {
	server: {
		socketOptions: {
			socketTimeoutMS: 3000,
			connectionTimeout: 2000
		}
	}
})
var db = mongoose.connection



db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {

	app.get("/", function (req, res) {
		res.send("HI :)")
	})

	app.post("/sendEmail", cors(), function (req, res) {
		var transporter = nodemailer.createTransport('smtps://alucherdi%40gmail.com:mundofreak666@smtp.gmail.com')
		var mailOptions = {
			from: '"Prueba" <alucherdi@gmail.com',
			to: 'hjgo127942@gmail.com',
			subject: 'Prueba de envío de correo',
			text: 'Mensaje :))))))'
		}

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) { res.send(err) } else {
				res.send(info.response)
			}
		})
	})

	app.post("/users", cors(), function (req, res) {
		User.find({}, function (err, users) {
			if (err) throw err;
			res.send(users)
		})
	})

	app.get("/news", cors(), function (req, res) {
		New.find({}, function (err, users) {
			if (err) throw err;
			res.send(users)
		})
	})

	app.get("/new", cors(), function (req, res) {
		console.log(req.query.id)
		New.find({ _id: req.query.id }, function (err, news) {
			if (err) {
				res.send("Error: no encontrado")
				return ":("
			}
			res.send(news[0])
		})
	})

	app.get("/note", cors(), function (req, res) {
		console.log(req.query.id)
		Note.find({ _id: req.query.id }, function (err, notes) {
			if (err) {
				res.send("Error: no encontrado")
				return ":("
			}
			res.send(notes[0])
		})
	})

	app.get("/notes", cors(), function (req, res) {
		Note.find({}, function (err, users) {
			if (err) throw err
			res.send(users)
		})
	})

	app.get("/references", cors(), function (req, res) {
		Reference.find({}, function (err, users) {
			if (err) throw err
			res.send(users)
		})
	})

	app.post("/careers", cors(), function (req, res) {
		Career.find({}, function (err, users) {
			if (err) throw err
			res.send(users)
		})
	})

	app.post("/user/loged", cors(), function (req, res) {
		if (req.session.user) {
			res.send(req.session.user)
		} else {
			res.send(null)
		}
	})

	app.post("/user/login", cors(), function (req, res) {
		User.find({ name: req.body.name, password: req.body.password }, function (err, user) {
			if (err) throw err
			res.send(user)
		})
	})

	app.post("/user/insert", cors(), function (req, res) {
		var newUser = new User(req.body)
		console.log("Añadiendo: " + req.body)
		newUser.save(function (err) {
			if (err) throw err
			console.log("Usuario: " + req.body.name + " agregado")
			res.send("Usuario: " + req.body.name + " agregado")
		})
	})

})

app.listen(8080, function () {
	console.log("Listeningn to 8080")
})