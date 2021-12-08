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
        var sql = "SELECT * FROM " + option + " WHERE listed_in LIKE '%" + genre + "%'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
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
module.exports = query_api;