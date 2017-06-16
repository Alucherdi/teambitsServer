var mongoose = require("mongoose")
var Schema = mongoose.Schema

var noteSchema = new Schema({
    title: String,
    content: String,
    image: String
}, { collection: "notes" })

var Note = mongoose.model("Note",  noteSchema)

module.exports = Note