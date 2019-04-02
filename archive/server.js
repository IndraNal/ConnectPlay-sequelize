require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 2001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.static("public"));


app.get('/', function(req, res) {    
  res.send('Welcome to Passport with Sequelize and without HandleBars');
});
// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


// module.exports = app;
