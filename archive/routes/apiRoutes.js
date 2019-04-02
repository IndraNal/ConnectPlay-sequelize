var db = require("../models");

module.exports = function(app) {

  app.post('/api/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  })
 };
