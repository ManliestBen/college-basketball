var mongoose = require('mongoose');

var faveTeamSchema = new mongoose.Schema({
    faveteam: String,
});

var favePlayerSchema = new mongoose.Schema({
    playerName: String
});


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    faveteams: [faveTeamSchema],
    
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);