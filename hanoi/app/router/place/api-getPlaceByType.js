module.exports = function(app, place){
    app.post('/place/get_placebytype', (req, res) => {
      place.find({ type : {$regex: req.body.type} }, (err, rs) => {
        console.log(rs);
        if (rs.length != 0 ) {
          result = {
            code :1000,
            message :"OK",
            data :rs,
          }
          return res.json(result);
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