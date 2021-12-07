var express = require("express");
var router=express.Router();
const db_con = require('./db_connection');

db_con.connect_db();