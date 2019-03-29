var express = require("express");


// Sets up the Express App
// =============================================================


var app = express();
var PORT = process.env.PORT || 8000;
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var session;
// var bodyParser = require('body-parser');
// var expressValidator = reuire('express-validator');
// var flash = reuire('connect-flash');
// var session = require('express-sesssion');
// var path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(session({
//   secret:'#@&G3yhCV6i09812Km6*omt64Gj'
// }
// ))

// Static directory
app.use(express.static("public"));




// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', './views')

// Import routes and give the server access to them.
 require("./controllers/playersController.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
