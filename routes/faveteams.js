var router = require('express').Router();
var passport = require('passport');
var request = require('request');
var favesCtrl = require('../controllers/faveteams');

router.post('/users/:id/faveteams', isLoggedIn, favesCtrl.createTeam);
router.post('/users/:id/faveplayers', isLoggedIn, favesCtrl.createPlayer);
router.post('/users/:id/faveteams/:teamid', isLoggedIn, favesCtrl.deleteTeam)
router.post('/users/:id/faveplayers/:playerid', isLoggedIn, favesCtrl.deletePlayer)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;