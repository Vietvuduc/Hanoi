
module.exports = function(app, place){
    app.post('/place/set_place', (req, res) => {
      place.find({ id_place : req.body.id_place }, (err, rs) => {
        console.log(rs);
        if (rs.length != 0 ) {
          rs[0].name = req.body.name,
          rs[0].address = req.body.address,
          rs[0].type = req.body.type,

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