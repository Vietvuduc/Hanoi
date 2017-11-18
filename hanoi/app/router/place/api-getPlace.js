
module.exports = function(app, place ){
    app.get('/place/get_place', (req, res) => {
        place.find({}, (err, rs) =>{
          if (rs.length  != 0) {            
                 result = {
                    code :1000,
                    message :"OK",
                    data :rs,
                  }
                  return res.json(result);
          } 
            else {
              let result = {
                code :9992,
              }
              return res.json(result);
            }
          
      })
    });
}