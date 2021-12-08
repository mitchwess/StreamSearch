var express = require("express");
var router=express.Router();
const query_api = require('./query');
router.use(express.static('public'));
router.use(express.urlencoded());
router.use(express.json({type: ['application/json', 'text/plain']}))
const query_options=require('./query');

var data;
///////////////////////////////////////////////
var mysql = require("mysql")

var pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Stream'
});

find_by_title = function(option, title){
    var promise = new Promise(function(resolve, reject){

    
        pool.getConnection(function(err, connection){
            if (err) throw err;
            var sql = "SELECT * FROM " + option + " WHERE title LIKE '%" + title + "%'";
            console.log(sql);
            connection.query(sql, function(error, results, fields){
            //console.log(results[0].title);
            resolve(results[0].title);
            connection.release();
            if (error) throw error;
        });
        });
    });
    return promise;
  }
///////////////////////////////////////////////
function send_to_query(dat){
    if(dat.netflixCheckBox){
        if(dat.titleCheckbox){
            find_by_title('netflix', dat.search).then(function(result){
                console.log(result);
            });
        }
    //     if(dat.genreCheckbox){
    //         query_options.find_by_genre('netflix', dat.search);
    //     }
    //     if(dat.castCheckBox){
    //         query_options.find_by_cast_member('netflix', dat.search);
    //     }
    // }

    // if(dat.huluCheckBox){
    //     if(dat.titleCheckbox){
    //         query_options.find_by_title('hulu', dat.search);
    //     }
    //     if(dat.genreCheckbox){
    //         query_options.find_by_genre('hulu', dat.search);
    //     }
    //     if(dat.castCheckBox){
    //         query_options.find_by_cast_member('hulu', dat.search);
    //     }
    // }

    // if(dat.amazonCheckBox){
    //     if(dat.titleCheckbox){
    //         query_options.find_by_title('prime', dat.search);
    //     }
    //     if(dat.genreCheckbox){
    //         query_options.find_by_genre('prime', dat.search);
    //     }
    //     if(dat.castCheckBox){
    //         query_options.find_by_cast_member('prime', dat.search);
    //     }
     }
}

function get_data(str){
    data = JSON.parse(str);
    console.log(data);
    send_to_query(data);   
}


module.exports= {get_data};