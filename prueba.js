var express = require("express")
var app = express()
var nodemailer = require("nodemailer")

app.get("/", function (req, res) {
    res.send("<a href=\"\/sendMail\">Send Mail </a>")
})

app.get("/sendMail", function (req, res) {
    var transporter = nodemailer.createTransport('smtps://alucherdi%40gmail.com:mundofreak666@smtp.gmail.com')
    var mailOptions =  {
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

app.listen(8080, function () {
    console.log("Listening to 8080")
})