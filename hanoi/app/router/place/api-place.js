var place = require('../model/place');

module.exports = function (app, db) {
    require('./api-getPlace') (app, place);
    require('./api-searchPlace') (app, place);

};