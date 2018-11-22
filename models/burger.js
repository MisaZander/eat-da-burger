//burger.js

//File goal: import in config/orm.js and use it to create the functions that will take in the necessary sql parameters for the orm.js to execute the statements.
//Create a burger object with methods that take in the specific mysql parameters for the orm to replace when it makes queries

/*
var burger = {
    insertOne: function(burgerTable, burgerName, cb){
        orm.insert(burgerTable, burgerName, function(response) {
            cb(response)
        })
    }
}

*/

var path = require("path");
var orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
    all: function(cb){
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    create: function(value, cb){
        orm.create("burgers", "burger_name", value, function(response) {
            cb(response);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", "burger_name", true, id, function(response) {
            cb(response);
        });
    }
}; //burger{}

module.exports = burger;
