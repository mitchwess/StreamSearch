var express = require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.send("Search Results Page");
});

module.exports=router;