var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burger: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var newBurger = req.body.name
  console.log(`newburger is ${newBurger}`);
  db.Burger.create({
    name: newBurger,
    eaten: false
  }).then(function(data){
     res.redirect('/')
  })
});


router.post("/eatBurger", function(req, res) {
  var burgerId = req.body.burgerID
  console.log(`burgerId is ${burgerId}`);
  db.Burger.update({
    eaten: true
  },{
    where: {
      id: burgerId
    }
  }).then(function(data) {
    console.log(data);
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
