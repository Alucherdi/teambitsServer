var mongoose = require("mongoose")
var Schema = mongoose.Schema

var careerSchema = new Schema({
    author: String,
    description: String,
    image: String
}, { collection: "careers" })

var Career = mongoose.model("Career",  careerSchema)

module.exports = Career