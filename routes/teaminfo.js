var router = require('express').Router();
var teamInfoCtrl = require('../controllers/teaminfo');

router.get('/teaminfo/:id', isLoggedIn, teamInfoCtrl.show);
router.get('/playerinfo/:id', isLoggedIn, teamInfoCtrl.showPlayer);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;