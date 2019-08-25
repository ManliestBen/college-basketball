const User = require('../models/user');

module.exports = {
    index,
    newTeam,
    newPlayer

};


function index(req, res, next) {

// Make the query object to use with User.find based up
// the user has submitted the search form or not
let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
// Default to sorting by name
let sortKey = req.query.sort || 'name';
User.find(modelQuery)
.sort(sortKey).exec(function(err, users) {
if (err) return next(err);
// Passing search values, name & sortKey, for use in the EJS
res.render('users/index', { users, user:req.user, name: req.query.name, sortKey });
});

  }

function newTeam(req, res) {
    res.render('users/newteam', {user:req.user});
}

function newPlayer(req, res) {
    res.render('users/newplayer', {user:req.user});
}