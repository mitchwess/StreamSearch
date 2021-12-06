var express = require("express");
var router=express.Router();
router.use(express.static('public'));
router.use(express.urlencoded());
router.use(express.json({type: ['application/json', 'text/plain']}))
const checkBoxdat=require('../database_connetion/checkboxdata');




function getCheckBoxData(str){
    checkBoxdat.get_data(str);
    // router.get("/",function(req,res,next){
    //     res.send(checkBoxdat.get_data(str));
    // });
    //console.log(checkBoxDatastr);
}

router.post("/", (req, res) => {
    console.log(req.body);
    getCheckBoxData(JSON.stringify(req.body));

})


module.exports=router;