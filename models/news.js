var mongoose = require("mongoose")
var Schema = mongoose.Schema

var newSchema = new Schema({
    title: String,
    content: String,
}, { collection: "news" })

var New = mongoose.model("New",  newSchema)

module.exports = New