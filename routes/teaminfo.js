var router = require('express').Router();
var teamInfoCtrl = require('../controllers/teaminfo');
var request = require('request');
var passport = require('passport');





router.get('/teaminfo/:id', teamInfoCtrl.show);
router.get('/playerinfo/:id', teamInfoCtrl.showPlayer);









module.exports = router;