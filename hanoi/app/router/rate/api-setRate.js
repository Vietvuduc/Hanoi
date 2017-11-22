var moment = require('moment');

module.exports = function(app, place, user) {
    app.post('/rate/set_rates', (req,res) => {
        user.find({id_user : req.body.id_user}, (err,rs) => {
            console.log(rs);
            if(rs.length !=0) {
                let m = moment();
                let 
                rates = {
                    id_user : req.body.id_user,
                    comment : req.body.comment,
                    rating : req.body.rating,
                    timeRate: m.toString(),
                }
                place.find({id_place : req.body.id_place}, (err1,rs1) => {
                    console.log(rs1);
                    if(rs1.length !=0) {
                        rs1[0].rates.push(rates);
                        rs1[0].save( function(err2, place) {
                            if(err2 != null){
                                res.send(err2);
                                return null;
                            }
                            else {
                                let result = {
                                    code: 1000,
                                    message: "OK",
                                    data :rates,
                                }
                                return res.json(result);
                            }
                        });
                    }
                    else {
                        let result = {
                            code: 9992,
                            message: "Place không có",
                        }
                        return res.json(result);
                    }
                })

            }
            else {
                let result = {
                    code: 9995,
                    message: "User không có",
                }
                return res.json(result);
            }
        })
    });
}