const TeamInfo = require('../models/teaminfo');
var request = require('request');


module.exports = {
   index,
   show
};


function index(req, res) {

}

function show(req, res) {
    TeamInfo.findById(req.params.id, function(err, users) {
        res.render('teaminfo/show', {user:req.user, users});
    })
}