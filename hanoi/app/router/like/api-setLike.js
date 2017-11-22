var moment = require('moment');

module.exports = function(app, user, place) {
    app.post('/like/set_likes', (req,res) => {
        place.find({id_place : req.body.id_place}, (err,rs) => {
            console.log(rs);
            if(rs.length !=0) {
                let m = moment();
                let likes = {
                    timeLike : m.toString(),
                    id_place : req.body.id_place,
                }
                user.find({id_user : req.body.id_user}, (err1,rs1) => {
                    console.log(rs1);
                    if(rs1.length !=0) {
                        rs1[0].likes.push(likes);
                        rs1[0].save( function(err2, user) {
                            if(err2 != null){
                                res.send(err2);
                                return null;
                            }
                            else {
                                let result = {
                                    code: 1000,
                                    message: "OK",
                                    data :likes,
                                }
                                return res.json(result);
                            }
                        });
                    }
                    else {
                        let result = {
                            code: 9992,
                            message: "User không có",
                        }
                        return res.json(result);
                    }
                })

            }
            else {
                let result = {
                    code: 9995,
                    message: "Place không có",
                }
                return res.json(result);
            }
        })
    });
}