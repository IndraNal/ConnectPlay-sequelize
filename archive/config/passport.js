var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
    function(username, password, done) {
      db.User.findOne({ where: {
          username: username, 
          email: email } 
        }, function (err, user) {
        
      });
    }
  ));