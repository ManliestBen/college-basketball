var router = require('express').Router();
var teamInfoCtrl = require('../controllers/teaminfo');
var request = require('request');
var passport = require('passport');




router.get('/teaminfo', teamInfoCtrl.index);
router.get('/teaminfo/:id', teamInfoCtrl.show);









module.exports = router;