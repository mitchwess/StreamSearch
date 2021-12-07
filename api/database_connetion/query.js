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
      connection.query('SELECT * FROM CONCAT(?) WHERE listed_in LIKE "%CONCAT(?)%"', [option, genre], function(error, results, fields){
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
}
var tmp = new query_api;
var tmp1 = 'netflix';
var tmp2 = 'Thrillers';
tmp.find_by_genre(tmp1, tmp2);