var mysql = require('mysql');


function connect_db(){

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "stream"
    });

    con.connect(function(err){
        if(err) throw err;
        console.log("database connected!")
    });
}
module.exports= {connect_db};