var router = require('express').Router();
var passport = require('passport');
var request = require('request');
var favesCtrl = require('../controllers/faveteams');

router.post('/users/:id/faveteams', favesCtrl.create);

module.exports = router;