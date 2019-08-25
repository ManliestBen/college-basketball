var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var request = require('request');
var teamDataCtrl = require('../controllers/teamlist');

router.get('/users', usersCtrl.index);
router.get('/users/newteam', usersCtrl.newTeam);
router.get('/users/newplayer', usersCtrl.newPlayer);
router.get('/users/newteam', teamDataCtrl.teamList);
router.post('/users/newteam', teamDataCtrl.teamList);





function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;


// next step, try to display user info, retry login icon thing...