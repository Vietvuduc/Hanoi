var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id: String,
    user: user,
    comment: String,
    rating: Float32Array,
    timeRate: String,



});    
module.exports = mongoose.model('rate', Schema);