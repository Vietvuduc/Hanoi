
module.exports = function(app,user ){
    app.post('/like/get_likes', (req, res) => {
      user.find({id_user: req.body.id_user }, (err, rs) => {
          console.log(req.body.id_user);
          if (rs.length != 0) {
            let result = {
              code: 1000,
              message: "OK",
              data :rs[0].likes,
            }
            return res.json(result);
          } 
            else {
              let result = {
                code: 9992,
                message: "User không có",
              }
              return res.json(result);
            }
          
        })
      });
}