var User = require('../models/user');

module.exports = {
    create
}

function create(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.faveteams.push(req.body);
        console.log(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}