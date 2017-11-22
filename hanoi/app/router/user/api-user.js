var user = require('../model/user');

module.exports = function (app, db) { 
 require('./api-getUser')(app,user);
 require('./api-setUser')(app,user);
//  require('./api-adduser')(app,user);
 require('./api-createUser')(app,user);
 
};