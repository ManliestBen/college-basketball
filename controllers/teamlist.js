var request = require('request');
var express = require('express');

module.exports = {
    teamList
};

function teamList(req, res){
    var apiLink = {
        url: 'https://api.sportradar.us/ncaawb-t3/games/2018/REG/schedule.json?api_key=' + process.env.NCAAWB_TOKEN,
    };
    console.log('requesting data from API');
    request(apiLink, function(err, response, body) {
        var teamData = JSON.parse(body);
        console.log(teamData);
        res.render('users/newteam', {user:req.user});
       
    })
}
