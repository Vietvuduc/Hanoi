const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var cookieParser = require('cookie-parser');
const app            = express();
const port = 8000;
var jsonParser = bodyParser.json()
var mongoose = require('mongoose');
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
var logger = require('morgan');
var io = require('socket.io');


app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
var configDB = require('./config/database');

mongoose.connect(configDB.url); 
mongoose.Promise = global.Promise;
var dbMongo = mongoose.connection;
dbMongo.on('err', console.error.bind(console,'connect err'))
dbMongo.once("open", function(err, rs){
if(!err){
  console.log('mongodb connect');
} else{
  console.log('err');
}

});
var listen = app.listen(port, () => {
  console.log('We are live on ' + port);
});

require('../hanoi/app/router/place/api-place')(app,dbMongo);
require('../hanoi/app/router/user/api-user')(app,dbMongo);
require('../hanoi/app/router/rate/api-rate')(app,dbMongo);
require('../hanoi/app/router/like/api-like')(app,dbMongo);
require('../hanoi/app/router/login/api-login')(app,dbMongo);
