var place  = require('../model/place');
var user  = require('../model/user');

module.exports = function (app, db) {
    require('./api-getLike')(app,user);
    require('./api-unLike')(app,user);
    require('./api-setLike')(app, user, place);
    
};