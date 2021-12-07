var mysql = require("mysql")

var pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Stream'
});


class query_api{

  get_user_input(data){
      console.log(data);
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

  select_hulu_data(){
    pool.getConnection(function(err, connection){
      if (err) throw err;
      connection.query('SELECT * FROM hulu', function(error, results, fields){
        console.log(results[0])
        connection.release();
        if (error) throw error;
      });
    });
  }

  select_prime_data(){
    pool.getConnection(function(err, connection){
      if (err) throw err;
      connection.query('SELECT * FROM prime', function(error, results, fields){
        console.log(results[0])
        connection.release();
        if (error) throw error;
      });
    });
  }

  select_disney_data(){
    pool.getConnection(function(err, connection){
      if (err) throw err;
      connection.query('SELECT * FROM disney', function(error, results, fields){
        console.log(results)
        connection.release();
        if (error) throw error;
      });
    });
  }

  

}

module.exports = query_api;