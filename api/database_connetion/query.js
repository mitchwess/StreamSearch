var mysql = require("mysql")

var pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Stream'
});

class query_api{

  find_by_genre(option, genre){     //input string with name of one of the services as well as genre in a string
    pool.getConnection(function(err, connection){
      if (err) throw err;
      connection.query('SELECT * FROM ? WHERE listed_in LIKE "%?%"', [option, genre], function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

  find_by_title(){

  }

  find_by_director(){

  }

  find_by_cast_member(){

  }
 

  join_selected_tables(netfixOption, huluOption, primeOption, disneyOption){
    pool.getConnection(function(err, connection){
      if (err) throw err;
      connection.query('SELECT * FROM ', [netflixOption, huluOption, disneyOption], function(error, results, fields){
        console.log(results[0])
        connection.release();
        if (error) throw error;
      });
    });
  }
}
var tmp = new query_api;
tmp.find_by_genre('netflix', 'Thrillers');