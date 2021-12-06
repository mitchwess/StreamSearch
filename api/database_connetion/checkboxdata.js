var express = require("express");
var router=express.Router();
router.use(express.static('public'));
router.use(express.urlencoded());
router.use(express.json({type: ['application/json', 'text/plain']}))

var data;

function parse_data(stri){
    var tmp = "hello";
    //tmp.includes(substr);
}
function get_data(str){
    console.log(str);
    data = JSON.parse(str);
    console.log(data.netflixCheckBox);
    //parse_data(str);
    //return str;
}
module.exports= {get_data};