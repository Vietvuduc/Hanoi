
module.exports = function(app, user) {
    app.post('/like/unlike', (req,res) => {
        user.find({id_user : req.body.id_user}, (err,rs) => {
            console.log(rs);
            if(rs.length != 0) {
                for(var i =0; i < rs[0].likes.length; i++){
                    if(rs[0].likes[i].data[0].id_place === req.body.id_place){
                        
                        rs[0].likes.splice(i,1);
                        rs[0].save( function(err2, user){
                            if(err2 != null){
                                res.send(err2);
                                return null;
                            }
                            else {
                                let result = {
                                    code: 1000,
                                    message: "Đã bỏ thích",
                                }
                                return res.json(result);
                            }
                        });
                        
                    }
                    else {
                        return res.json({
                            code : 1,
                            message : "User chưa like Place này",

                        })
                    }
                }
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