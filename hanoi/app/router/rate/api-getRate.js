
module.exports = function(app,place ){
    app.post('/rate/get_rates', (req, res) => {
      place.find({id_place: req.body.id_place }, (err, rs) => {
          console.log(req.body.id_place);
          if (rs.length != 0) {
            let result = {
              code: 1000,
              message: "OK",
              data :rs[0].rates,
            }
            return res.json(result);
          } 
            else {
              let result = {
                code: 9992,
                message: "Place không có",
              }
              return res.json(result);
            }
          
        })
      });
}