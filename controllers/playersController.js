// Requiring our Player model
<<<<<<< Updated upstream
var db = require("../models");
=======
var db = require('../models');
>>>>>>> Stashed changes

// geocoder
var NodeGeocoder = require('node-geocoder');

var options = {
<<<<<<< Updated upstream
  provider: "mapquest",
  apiKey: "sX4NwELW6q0I1WjDtEvnSTLBwIU3o4hl",
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  formatter: null         // 'gpx', 'string', ...
=======
	provider: 'mapquest',
	apiKey: 'sX4NwELW6q0I1WjDtEvnSTLBwIU3o4hl',
	// Optional depending on the providers
	httpAdapter: 'https', // Default
	formatter: null // 'gpx', 'string', ...
>>>>>>> Stashed changes
};

var geocoder = NodeGeocoder(options);
// Import the model (player.js) to use its database functions.
<<<<<<< Updated upstream
var player = require("../models/player.js");
=======
var player = require('../models/player.js');
>>>>>>> Stashed changes
// //passport Config
// require("../config/passport.js")(passport);

// //passport middle
// app.use(passport.initialize());
// app.use(passport.session());

module.exports = function(app) {
<<<<<<< Updated upstream

// Create all our routes and set up logic within those routes where required.
app.get("/", function (req, res) {
  db.Player.findAll({}).then(function(players) {
    res.render("index", {data: players});
  });
});
app.get("/Registration", function (req, res) {
  db.Player.findAll({}).then(function(players) {
    res.render("Registration", {data: players});
});
});
app.get("/home", function (req, res) {
  db.Player.findAll({}).then(function(players) {
    res.render("home",{data: players});
});
});

app.post("/api/players", function (req, response) {
  geocoder.geocode({ address: req.body.Address, country: 'USA', zipcode: req.body.ZipCode }, function (err, res) {
  console.log(res);
   }).then(function (res) {
    console.log(res);
   

    db.Player.create({
      FirstName :req.body.FirstName,
      LastName:req.body.LastName,
      Email:req.body.Email,
      UserName:req.body.UserName,
      UserPassword:req.body.UserPassword,
      Address:req.body.Address,
      CityName:req.body.CityName,
      ZipCode:req.body.ZipCode,
      State:req.body.State,
      Latitude:res[0].latitude,
      Longitude:res[0].longitude,
    })
  })
  .then(function(player) {
    response.json({player});
  });

});
}

=======
	// Create all our routes and set up logic within those routes where required.

	app.get('/Registration', function(req, res) {
		db.Player.findAll({}).then(function(players) {
			res.render('Registration', { data: players });
		});
	});
	app.get('/api/players', function(req, res) {
		db.Player.findAll({}).then(function(data) {
			res.json(data);
		});
	});

	app.get('/', function(req, res) {
		res.render('map');
	});

	app.post('/Registration', function(req, response) {
		geocoder
			.geocode({ address: req.body.Address, country: 'USA', zipcode: req.body.ZipCode }, function(err, res) {
				console.log(res);
			})
			.then(function(res) {
				console.log(res);

				db.Player.create({
					FirstName: req.body.FirstName,
					LastName: req.body.LastName,
					Email: req.body.Email,
					UserName: req.body.UserName,
					UserPassword: req.body.UserPassword,
					Address: req.body.Address,
					CityName: req.body.CityName,
					ZipCode: req.body.ZipCode,
					State: req.body.State,
					Latitude: res[0].latitude,
					Longitude: res[0].longitude
				});
			})
			.then(function(player) {
				response.json({ player });
			});
	});
};
>>>>>>> Stashed changes

// app.post('/signup', passport.authenticate('local-signup', {
//   successRedirect: '/dashboard',

//   failureRedirect: '/signup'
// }

<<<<<<< Updated upstream
// ));
=======
// ));
>>>>>>> Stashed changes
