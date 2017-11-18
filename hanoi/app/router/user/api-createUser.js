  var User = require('../model/user');

module.exports = function (app) {
    app.post('/user/create_user', function (req, res) {
        let newUser = new User();
        newUser.token_user =  req.body.token_user;
        newUser.urlAvatar =  req.body.urlAvatar;
        newUser.id_user =  req.body.id_user;
        newUser.lastName =  req.body.lastName;
        newUser.firstName =  req.body.firstName;
        newUser.like = null;

        newUser.save((er, rl) => {
          if(!er){
            let result={
                code:1000,
            }
            return res.json(result);
            }
      
        })
    
    });

}