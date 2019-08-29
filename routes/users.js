var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var request = require('request');


router.get('/users', isLoggedIn, usersCtrl.index);
router.get('/users/faveteams', isLoggedIn, usersCtrl.newTeam);
router.get('/users/:id', isLoggedIn, usersCtrl.show);
router.get('/users/:id/update', isLoggedIn, usersCtrl.updateInfo);
router.put('/users/:id/update', isLoggedIn, usersCtrl.changeInfo)



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;


// next step, try to display user info, retry login icon thing...