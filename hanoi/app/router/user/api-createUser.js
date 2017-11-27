  var User = require('../model/user');

module.exports = function (app) {
    app.post('/user/create_user', function (req, res) {
        let newUser = new User();
        newUser.urlAvatar =  req.body.urlAvatar;
        newUser.id_user =  req.body.id_user;
        newUser.fullName =  req.body.fullName;
        newUser.like = [];

        newUser.save((er, rl) => {
          if(!er){
            let result={
                code:1000,
                data: newUser,
            }
            return res.json(result);
            }
      
        })
    
    });

}