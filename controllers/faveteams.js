var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {
    createTeam,
    createPlayer,
    deleteTeam,
    deletePlayer

}

function createTeam(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.faveteams.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}

function createPlayer(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.faveplayers.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}

function deleteTeam(req, res) {
 console.log(req.params.teamid)
    User.findById(req.params.id, function(err, user) {
         user.faveteams.splice(req.params.teamid, 1);
         user.save(function(err) {
             res.redirect(`/users/${user._id}`);
         });
     });
}

function deletePlayer(req, res) {
    User.findById(req.params.id, function(err, user) {
         user.faveplayers.splice(req.params.playerid, 1);
         user.save(function(err) {
             res.redirect(`/users/${user._id}`);
         });
     });
}



