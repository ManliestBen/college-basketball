var mongoose = require('mongoose');

var faveTeamSchema = new mongoose.Schema({
    faveteams: String,
    teamId: String
});

var favePlayerSchema = new mongoose.Schema({
    faveplayers: String,
    playerId: String
});

var userSchema = new mongoose.Schema({
    name: {type: String},
    alias: {type: String, default: "Alias"},
    email: {type: String},
    googleId: {type: String},
    faveteams: [faveTeamSchema],
    faveplayers: [favePlayerSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);