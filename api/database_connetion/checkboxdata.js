var express = require("express");
var router=express.Router();
const query_api = require('./query');
router.use(express.static('public'));
router.use(express.urlencoded());
router.use(express.json({type: ['application/json', 'text/plain']}))

var data;
const query_options = new query_api;

function send_to_query(dat){
    query_options.get_user_input(dat);
}

function get_data(str){
    data = JSON.parse(str);
    console.log(data);
    send_to_query(data);   
}


module.exports= {get_data};