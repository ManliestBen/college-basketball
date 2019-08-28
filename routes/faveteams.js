var router = require('express').Router();
var passport = require('passport');
var request = require('request');
var favesCtrl = require('../controllers/faveteams');

router.post('/users/:id/faveteams', favesCtrl.createTeam);
router.post('/users/:id/faveplayers', favesCtrl.createPlayer);
router.post('/users/:id/faveteams/:teamid', favesCtrl.deleteTeam)
router.post('/users/:id/faveplayers/:playerid', favesCtrl.deletePlayer)
module.exports = router;