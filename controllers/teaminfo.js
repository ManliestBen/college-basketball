const TeamInfo = require('../models/teaminfo');
var request = require('request');
const axios = require('axios');


module.exports = {
    show,
    showPlayer
};




function show(req, res) {
    let { id } =  req.params;
    var apiLink = {
        url:`https://api.sportradar.us/ncaamb/trial/v4/en/seasons/2018/REG/teams/${id}/statistics.json?api_key=${process.env.NCAAMB_TOKEN}`
    }
    axios.get(apiLink.url)
    .then(result => {
        console.log(result)
        return result.data
    })
    .then(response => {
        console.log('requesting data from API', apiLink.url);
        console.log(response)
        res.render('teaminfo/show', {user:req.user, response});

    }).catch(error => console.error(error))
}


function showPlayer(req, res) {
    let { id } =  req.params;
    var apiLink = {
        url:`https://api.sportradar.us/ncaamb/trial/v4/en/players/${id}/profile.json?api_key=${process.env.NCAAMB_TOKEN}`
    }
    axios.get(apiLink.url)
    .then(result => {
        console.log(result)
        return result.data
    })
    .then(response => {
        console.log('requesting data from API', apiLink.url);
        console.log(response)
        res.render('playerinfo/show', {user:req.user, response});

    }).catch(error => console.error(error))
}



