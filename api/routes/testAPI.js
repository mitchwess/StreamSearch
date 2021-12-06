var express = require("express");
var router=express.Router();
router.use(express.static('public'));
router.use(express.json());
const db_con=require('../database_connetion/db_connection');
var str;
router.get("/",function(req,res,next){
    res.send("API is working properly");
});

module.exports=router;