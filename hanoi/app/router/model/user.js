var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    id_user: String,
    urlAvatar: String,
    fullName: String,
    likes: [],

});    
module.exports = mongoose.model('user', Schema);