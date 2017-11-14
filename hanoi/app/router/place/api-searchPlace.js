module.exports = function (app, place) {
    app.post('/place/search_place', (req, res) => {
        var input = {
            change3 : [
                { name: req.body.name, address: req.body.address, type: req.body.type }
            ],
            change2 : [
                { name: req.body.name, address: req.body.address },
                { name: req.body.name, type: req.body.type },
                { address: req.body.address, type: req.body.type}
            ],
            change1 : [
                {name: req.body.name},
                {address: req.body.address},
                {type: req.body.type}
            ]
        };

        console.log(req.body.category_id);
        var resultchange =0;
        if(req.body.name !=null){
            resultchange +=1;
        }
        if(req.body.address !=null){
            resultchange +=1;
        }
        if(req.body.type !=null){
            resultchange +=1;
        }

        console.log(resultchange);
        if(resultchange === 1){
            place.find({$or : input.change1},
                (err, rs) => {
                    if (rs.length != 0) {
                        console.log("vao 1");
                        let result = {
                            code: 1000,
                            message: "OK",
                            data: rs,
                        }
                        return res.json(result);
        
                    }
                    else {
                        let result = {
                            code: 9992,
                            message: "Place is not existed",
                        }
                        return res.json(result);
                    }
                }
            );
        }
        else if(resultchange === 2){
            place.find({$or : input.change2},
                (err, rs) => {
                    if (rs.length != 0) {
                        console.log("vao 2");
                        let result = {
                            code: 1000,
                            message: "OK",
                            data: rs,
                        }
                        return res.json(result);
        
                    }
                    else {
                        let result = {
                            code: 9992,
                            message: "Place is not existed",
                        }
                        return res.json(result);
                    }
                }
            );
        }
        else if(resultchange === 3){
            place.find({$or : input.change3},
                (err, rs) => {
                    if (rs.length != 0) {
                        console.log("vao 3");
                        let result = {
                            code: 1000,
                            message: "OK",
                            data: rs,
                        }
                        return res.json(result);
        
                    }
                    else {
                        let result = {
                            code: 9992,
                            message: "Place is not existed",
                        }
                        return res.json(result);
                    }
                }
            );
        }
            
    });
}

