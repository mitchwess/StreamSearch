/********************************
File: checkbox.dat 
gets the input from the front_end and sends it to checkboxdata.js to be used in quereys

////////////////////*/
var express = require("express");
var router=express.Router();
router.use(express.static('public'));
router.use(express.urlencoded());
router.use(express.json({type: ['application/json', 'text/plain']}))
const checkBoxdat=require('../database_connetion/checkboxdata');


//////function uses checkbox data to send to get_data function in ../database_connetion/checkboxdata file

function getCheckBoxData(str){
    checkBoxdat.get_data(str);
    //var data = JSON.parse(str);
    //console.log(data);
    // checkBoxdat.title_query(data.netflixCheckBox, data.titleCheckbox, data, 'netflix').then(function(result){
    //     console.log(result);
    //     router.get("/", (req, res) => {
    //         res.send(result);
    //     });
    // });

     
}

router.get("/", (req, res) => {
    res.send("api res");
});

//post request used to get the checkbox and searchbar input fron the webpage
router.post("/", (req, res) => {
    //console.log(req.body);
    getCheckBoxData(JSON.stringify(req.body));
})


module.exports=router;