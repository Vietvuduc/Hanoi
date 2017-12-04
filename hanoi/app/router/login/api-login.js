var user = require('../model/user');

module.exports = function (app) {
    app.post('/login', (req, res) => {
     user.find({sdt : req.body.sdt, pass : req.body.pass}, (err, rs) =>{
        if(rs.length >0){
            let result ={
                code :1000,
                message :"OK",
                profile : rs[0],
            }
            return res.json(result);
        } else{
            let result ={
                code : 9995,
                message :"User is not validated",
            }
            return res.json(result);
        }
     });
    });
  }