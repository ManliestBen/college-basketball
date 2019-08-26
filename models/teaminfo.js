var mongoose = require('mongoose');


var playerSchema = new mongoose.Schema({
    playerId: String,
    teamId: String,
    playerName: String,
    playerHeight: Number,
    playerWeight: Number,
    playerPosition: String,
    playerJersey: Number,
    playerClass: String,
    playerBirthplace: String
});

var teamInfoSchema = new mongoose.Schema({
    market: {type: String},
    name: {type: String},
    founded: {type: Number},
    venueName: {type: String},
    venueCapacity: {type: Number},
    venueCity: {type: String},
    venueState: {type: String},
    confName: {type: String},
    division: {type: String},
    headCoach: {type: String},
    coachExp: {type: String},
    players: [playerSchema]

      
}, {
    timestamps: true
});




module.exports = mongoose.model('TeamInfo', teamInfoSchema);