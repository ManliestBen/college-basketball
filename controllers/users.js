const User = require('../models/user');
var request = require('request');
module.exports = {
    index,
    newTeam,
    show
    // createTeam

};


function show(req, res) {
    User.findById(req.params.id, function(err, users) {
        res.render('users/show', {user:req.user, users});
    })
}
    




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
    console.log(req.user.id);
    res.render('users/faveteams', {user:req.user, teamData: ['']});

}



// function createTeam(req, res) {
//     var team = new User(req.body);
//     team.save(function(err) {
//         if (err) return res.redirect('/users/newteam');
//         res.redirect('/users');
//     })
// }
