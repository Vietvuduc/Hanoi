var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id_rate: String,
    comment: String,
    rating: Number,
    timeRate: String,



});    
module.exports = mongoose.model('rate', Schema);