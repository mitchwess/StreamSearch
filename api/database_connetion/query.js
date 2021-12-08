var mysql = require("mysql")

var pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Stream'
});



  function find_by_genre(option, genre){     //input string with name of one of the services as well as genre in a string
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

  function find_by_title(option, title){
    pool.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "SELECT * FROM " + option + " WHERE title LIKE '%" + title + "%'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
        //console.log(results[0].title);
        connection.release();
        if (error) throw error;
        return results[0].title;
      });
    });
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

  function find_by_cast_member(option, cast_member){
    pool.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "SELECT * FROM " + option + " WHERE show_cast LIKE '%" + cast_member + "%'";
        console.log(sql);
        connection.query(sql, function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

module.exports = {find_by_title};