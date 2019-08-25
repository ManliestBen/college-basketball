var mongoose = require('mongoose');

var faveTeamSchema = new mongoose.Schema({
    teamName: String,
});

var favePlayerSchema = new mongoose.Schema({
    playerName: String
});


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    faveTeam: [faveTeamSchema],
    favePlayer: [favePlayerSchema],
    teamData: String
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);