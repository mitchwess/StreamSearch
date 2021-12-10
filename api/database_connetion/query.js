var mysql = require("mysql")

var pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Stream'
});



  function find_by_country(option, country){
    pool.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "SELECT * FROM " + option + " WHERE country = '" + country + "'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

  function find_by_release_year(option, year){
    pool.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "SELECT * FROM " + option + " WHERE release_year = '" + year + "'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

  find_by_title = function(option, title){
    var promise = new Promise(function(resolve, reject){

    
        pool.getConnection(function(err, connection){
            if (err) throw err;
            var sql = "SELECT * FROM " + option + " WHERE title LIKE '%" + title + "%'";
            console.log(sql);
            connection.query(sql, function(error, results, fields){
            //console.log(results[0].title);
            resolve(results);
            connection.release();
            if (error) throw error;
        });
        });
    });
    return promise;
  }

  find_by_genre = function(option, genre){   //input string with name of one of the services as well as genre in a string
      var promise = new Promise(function(resolve, reject){


        pool.getConnection(function(err, connection){
            if (err) throw err;
            var sql = "SELECT * FROM " + option + " WHERE listed_in LIKE '%" + genre + "%'";
            console.log(sql);
            connection.query(sql, function(error, results, fields){
            //console.log(results)
            resolve(results);
            connection.release();
            if (error) throw error;
          });
        });
      });
      return promise;
  }

  function find_by_director(option, director){
    pool.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "SELECT * FROM " + option + " WHERE director = '" + director + "'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

  find_by_cast_member = function(option, cast_member){
      var promise = new Promise(function(resolve, reject){

        pool.getConnection(function(err, connection){
            if (err) throw err;
            var sql = "SELECT * FROM " + option + " WHERE show_cast LIKE '%" + cast_member + "%'";
            console.log(sql);
            connection.query(sql, function(error, results, fields){
            //console.log(results)
            resolve(results);
            connection.release();
            if (error) throw error;
          });
        });
    });
    return promise;
}

module.exports = {find_by_title, find_by_genre, find_by_cast_member};