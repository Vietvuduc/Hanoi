
module.exports = function(app, user){
    app.post('/user/set_user', (req, res) => {
      user.find({ id_user : req.body.id_user }, (err, rs) => {
        console.log(rs);
        if (rs.length != 0 ) {
          rs[0].fullName = req.body.fullName,
          rs[0].urlAvatar = req.body.urlAvatar,
          
            rs[0].save(function (err, post) {
              if (!err) {
                result = {
                  code: 1000,
                  message: "OK",
                }
                return res.json(result);
              } else {
                result = {
                  code: 404,
                  message: err,
  
                }
                return res.json(result);
              }
            });
  
        }
        else {
          let result = {
            code: 9992,
            message: "lỗi",
          }
          return res.json(result);
        }
  
      })
      });
  }
