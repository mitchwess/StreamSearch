var express = require("express");
var router=express.Router();
const db_con=require('../database_connetion/db_connection');

router.get("/",function(req,res,next){
    res.send("API is working properly");
});

module.exports=router;