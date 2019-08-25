
var router = require('express').Router();
var passport = require('passport');
var request = require('request');

// renders view for home page
router.get('/', function(req, res, next) {
  res.redirect('/users');
});


// Google OAuuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
