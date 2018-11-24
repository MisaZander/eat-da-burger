//orm.js

//File goal: Import in the connection.js file and use it to query the database

//Create an orm object that has three methods to query the database and export that object

//selectAll()
//insertOne()
//updateOne()

var path = require("path");
var connection = require(path.join(__dirname, "connection.js"));

var orm = {
    all: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(queryError, queryRes) {
            if(queryError){
                throw queryError;
            }
            cb(queryRes);
        });//.query()
    }, //all()
    create: function(tableName, column, value, cb) {
        var queryString = "INSERT INTO ??(??) VALUES (?)";

        connection.query(queryString, [tableName, column, value], function(queryError, queryRes) {
            if(queryError) {
                throw queryError;
            }
            cb(queryRes);
        }); //.query()
    }, //create()
    update: function(tableName, column, newValue, id, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE id=?";

        connection.query(queryString, [tableName, column, newValue, id], function(queryError, queryRes) {
            if(queryError){
                throw queryError;
            }
            cb(queryRes);
        });//.query()
    }
}; //orm{}

module.exports = orm;