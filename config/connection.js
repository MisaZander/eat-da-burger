//connection.js

//File goal: Connect Node to MySQL and export that connection
//./config/connection.js
// Set up MySQL connection.
var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  port: 3306,
  user: "guest",
  password: "guest",
  database: "burgers_db"
})

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "guest",
//   password: "guest",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.log("MYSQL CONNECTION FAILURE");
//     throw err;
//     //return;
//   }
//   console.log("MySQL connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = pool;
