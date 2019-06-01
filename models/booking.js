var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model("Blog", new Schema({
    firstname: String,
    lastname: String,
    email: String,
    contact: Number,
    comments: String,
    xl: Number,
    md: Number,
    sm: Number,
    store: Date,
    pickup: Date,
    store_id: String
}));