var User = require('../models/user');

module.exports = {
    createTeam,
    createPlayer,
    deleteTeam

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

function deleteTeam (req, res) {
    //TODO : find the user record that you want to remove the team from remove the tema from that users favteams array with splice or any corresponing mongoose method 
}
