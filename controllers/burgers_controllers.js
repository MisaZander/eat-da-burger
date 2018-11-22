//burgers_controller.js

//File goal: import in Express and models/burger.js. This app will create the Express router and define the logic for each specific route(router.get() and router.post(), etc.), 
//calling the orm in burger.js with the parameters received in the request. Export the router at the end.

//require Express
//require the burger.js file = burger
//create a router = router

/*router.get(req, res) {
    burger.insert(newBurgerData, callback(data) {
        let hbsObj = {
            burger: data
        }

        res.render("index", hbsObj)
    })
}*/

var express = require("express");
var router = express.Router();
var path = require("path");
var burger = require(path.join(__dirname, "..", "models", "burger.js"));

router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data);
        return res.json(data);
    });
}); //router.get

module.exports = router;