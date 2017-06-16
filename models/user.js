var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    email: String,
    password: String
}, { collection: "users" })

var User = mongoose.model("User",  userSchema)

module.exports = User