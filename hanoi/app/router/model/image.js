var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id_image: String,
    url: String,


});    
module.exports = mongoose.model('image', Schema);