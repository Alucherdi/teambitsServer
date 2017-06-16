var mongoose = require("mongoose")
var Schema = mongoose.Schema

var referenceSchema = new Schema({
    title: String,
    author: String
}, { collection: "references" })

var Reference = mongoose.model("Reference",  referenceSchema)

module.exports = Reference