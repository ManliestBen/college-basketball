var mongoose = require('mongoose');

var faveTeamSchema = new mongoose.Schema({
    team: String,
});

var favePlayerSchema = new mongoose.Schema({
    playerName: String
});


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    faveTeam: [faveTeamSchema],
    
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);