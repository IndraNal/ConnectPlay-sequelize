// Requiring our Player model
var db = require('../models');
require('dotenv').config();
// geocoder
var NodeGeocoder = require('node-geocoder');

var options = {
	provider: 'mapquest',
	apiKey: process.env.SECRETKEY,
	// Optional depending on the providers
	httpAdapter: 'https', // Default
	formatter: null // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

module.exports = function (app) {

	app.get('/api/players', function (req, res) {
		db.Player.findAll({}).then(function (data) {
			res.json(data);
		});
	});

	app.get('/', function (req, res) {
		res.render('Registration');
	});

	app.get('/map', function (req, res) {
		res.render('map');
	});

	app.post('/api/players', function (req, response) {
		geocoder
			.geocode({ address: req.body.Address, country: 'USA', zipcode: req.body.ZipCode }, function (err, res) {
				console.log(res);
			})
			.then(function (res) {
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
			.then(function (player) {
				response.json({ player });
			});
	});
};
