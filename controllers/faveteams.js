var User = require('../models/user');

module.exports = {
    createTeam,
    createPlayer
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