const User = require('../models/user');

module.exports = {
    index,
    newTeam,
    show,
    updateInfo,
    changeInfo,
};


function show(req, res) {
    User.findById(req.params.id, function(err, users) {
        res.render('users/show', {user:req.user, users});
    })
}
    

function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery).sort(sortKey).exec(function(err, users) {
        if (err) return next(err);
        res.render('users/index', { users, user:req.user, name: req.query.name, sortKey });
    });
}

// Show faveteams 
function newTeam(req, res) {
    console.log(req.user.id);
    res.render('users/faveteams', {user:req.user_id });
}

// Show profile 
function updateInfo(req, res) {
    User.findById(req.params.id, function(err, users) {
        res.render('users/update', {user:req.user, users});
    })
}

// Change user alias
function changeInfo(req, res){
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
        user.alias = req.body.alias;
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}

