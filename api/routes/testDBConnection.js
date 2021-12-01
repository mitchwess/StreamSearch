var express = require("express");
var router=express.Router();
const db_con = require('../database_connetion/db_connection');

router.get("/",function(req,res,next){
    db_con.connect_db();
    res.send("Testing db conection");
});

module.exports=router;