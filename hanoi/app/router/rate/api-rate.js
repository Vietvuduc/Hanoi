var place  = require('../model/place');
var user  = require('../model/user');

module.exports = function (app, db) {
    require('./api-getRate')(app,place)
    require('./api-setRate')(app,place, user);
    
};