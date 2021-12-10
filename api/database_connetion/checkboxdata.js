/***** 
 *   file is used to the data that was input and give it the paths to call the right querys
 * 
 * uses querys in query.js file
 * 
 * 
*/


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


///////////////////////////////////////////////
// gets query for movie/show title search from a selected streaming service
function title_query(stream_service, type_of_search, dat,str){
    var all_results=" no search results from  " + str + "\n";
    var promise = new Promise(function(resolve, reject){
    
    if(stream_service){ ///// netflix search query calls
        
        if(type_of_search){ ///// search by title call
          
          query_options.find_by_title(str, dat.search).then(function(result){

                console.log(result.length + " search results");
                if(result.length>0) all_results=result[0].title;
                for(let i = 1; i < result.length; i++){
                    //console.log(result[i].title);
                    all_results += "\n" + result[i].title;
                }
                resolve(all_results);
            });
        }
    }
    else resolve(all_results); 
});
return promise;
}
//gets query result for a genre search from input
function genre_query(stream_service, type_of_search, dat,str){
    var all_results=" no search results from  " + str + "\n";
    var promise = new Promise(function(resolve, reject){
    
    if(stream_service){ ///// netflix search query calls
        if(type_of_search){ ///// search by title call
          query_options.find_by_genre(str, dat.search).then(function(result){
              
                console.log(result.length + " search results");
                if(result.length>0) all_results=result[0].title;
                for(let i = 1; i < result.length; i++){
                    //console.log(result[i].title);
                    all_results += "\n" + result[i].title;
                }
                resolve(all_results);
            });
        }
    }
    else resolve(all_results); 
});
return promise;
}
//gets query for cast search input
function cast_query(stream_service, type_of_search, dat,str){
    var all_results=" no search results from  " + str + "\n";
    var promise = new Promise(function(resolve, reject){
    
    if(stream_service){ ///// netflix search query calls
        if(type_of_search){ ///// search by title call
          query_options.find_by_cast_member(str, dat.search).then(function(result){
              
                console.log(result.length + " search results\n");
                if(result.length>0) all_results=result[0].title;
                for(let i = 1; i < result.length; i++){
                    //console.log(result[i].title);
                    all_results += "\n" + result[i].title;
                }
                resolve(all_results);
            });
        }
    }
    else resolve(all_results); 
});
return promise;
}

//function sends data based on what input is selected to the query search
function get_data(str){
    data = JSON.parse(str);
    //console.log(data);
    //////////////// Netflix query calls ////////////////////////////////
    if(data.netflixCheckBox){//if netflix box is selected
        if(data.titleCheckbox){//if title search is selected
            title_query(data.netflixCheckBox, data.titleCheckbox, data, 'netflix').then(function(result){
                console.log(result);
            });
        }
        if(data.genreCheckbox){//if genre search is selected
            genre_query(data.netflixCheckBox, data.genreCheckbox, data, 'netflix').then(function(result){
                console.log(result);
            });
        }
        if(data.castCheckBox){//if cast search is selected
            cast_query(data.netflixCheckBox, data.castCheckBox, data, 'netflix').then(function(result){
                console.log(result);
            });
        }
    }
////////////////////////////////////////////////////////////////////////

////////////////// Hulu query calls ///////////////////////////////////////
    if(data.huluCheckBox){//if hulu box is checked
        if(data.titleCheckbox){//if title search is selected
            title_query(data.huluCheckBox, data.titleCheckbox, data, 'hulu').then(function(result){
                console.log(result);
            });
        }
        if(data.genreCheckbox){//if genre search is selected
            genre_query(data.huluCheckBox, data.genreCheckbox, data,'hulu').then(function(result){
                console.log(result);
            });
        }
        if(data.castCheckBox){//if cast search is selected
            cast_query(data.huluCheckBox, data.castCheckBox, data,'hulu').then(function(result){
                console.log(result);
            }); 
        }
    } 
    ////////////////////////////////////////////////////////////////////  

    ////////////////// Prime query calls ///////////////////////////////////////
    if(data.amazonCheckBox){//if amazon search is selected
        if(data.titleCheckbox){
            title_query(data.amazonCheckBox, data.titleCheckbox, data, 'prime').then(function(result){
                console.log(result);
            });
        }
        if(data.genreCheckbox){
            genre_query(data.amazonCheckBox, data.genreCheckbox, data, 'prime').then(function(result){
                console.log(result);
            });
        }
        if(data.castCheckBox){
            cast_query(data.amazonCheckBox, data.castCheckBox, data, 'prime').then(function(result){
                console.log(result);
            });  
        }
    }
    //////////////////////////////////////////////////////////////////// 
}


module.exports= {get_data, title_query, genre_query, cast_query};