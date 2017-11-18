
var place  = require('../model/place');

module.exports = function(app){
    app.post('/place/create_place',function(req, res){
        console.log(req.body.id_place);
        let newplace = new place();
        newplace.id_place= req.body.id_place;
        newplace.token_place= req.body.token_place;
        newplace.name=req.body.name;
        newplace.address=req.body.address;
        newplace.type=req.body.type;
        newplace.images= null;
        newplace.description= req.body.description;
        newplace.rates= null;
        newplace.numberPhone= req.body.numberPhone;
        newplace.website=req.body.website;
        newplace.openHours= req.body.openHours;
        newplace.price= req.body.price;
        newplace.distance=req.body.distance;
        
       newplace.save((e,r)=>{
           if(!e){
               let result ={
                   code :1000,
                   data : newplace,
               }
               return res.json(result);
           }
       })
    }
);
    
}