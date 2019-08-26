var mongoose = require('mongoose');

var faveTeamSchema = new mongoose.Schema({
    faveteams: String,
});

// var favePlayerSchema = new mongoose.Schema({
//     playerName: String
// });


var userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    googleId: {type: String},
    faveteams: [faveTeamSchema],
    
}, {
    timestamps: true
});




module.exports = mongoose.model('User', userSchema);