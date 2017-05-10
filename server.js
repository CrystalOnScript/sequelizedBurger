
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var methodOverride = require("method-override");
var app = express();
var db = require('./models');
var router = require("./controllers/burgers_controller.js");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory
app.use(express.static("./public"));
app.use("/", router)




// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
