var mongoose = require('mongoose');
var image = require('./image');
var rate = require('./rate');

var Schema = new mongoose.Schema({
    id_place: String,
    name: String,
    address: String,
    type: String,
    images: [],
    description: String,
    rates: [],
    numberPhone: String,
    website: String,
    openHours: String,
    price: String,
    distance: String,


});    
module.exports = mongoose.model('place', Schema);