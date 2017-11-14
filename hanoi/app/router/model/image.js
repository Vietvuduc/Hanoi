var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id: String,
    url: String,


});    
module.exports = mongoose.model('image', Schema);