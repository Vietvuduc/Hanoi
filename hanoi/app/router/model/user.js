var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    id_user: String,
    urlAvatar: String,
    lastName: String,
    firstName: String,
    likes: [],

});    
module.exports = mongoose.model('user', Schema);