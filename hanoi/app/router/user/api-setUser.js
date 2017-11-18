var user = require('../model/user');

module.exports = function(app){
    app.post('/user/set_user', function (req, res) {
      user.find({ token_user: req.body.token_user }, (err,rs) => {
        if (rs.length != 0) {
            rs[0].firstname = req.body.firstname,
            rs[0].lastname = req.body.lastname,
            rs[0].urlAvatar = req.body.urlAvatar,
            rs.save(function (err, post) {
              if (!err) {
                result = {
                  code: 1000,
                  message: "OK",
                  data: rs[0].urlAvatar,
                }
                return res.json(result);
              } else {
                result = {
                  code: 404,
                  message: err,
  
                }
                return res.json(result);
              }
            })
  
        }
        else {
          let result = {
            message: "xyz",
          }
          return res.json(result);
        }
  
      })
      });
}