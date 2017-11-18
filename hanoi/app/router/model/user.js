var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    token_user: String,
    urlAvatar: String,
    id_user: String,
    lastName: String,
    firstName: String,
    likes: [],

});    
module.exports = mongoose.model('user', Schema);