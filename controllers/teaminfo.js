const TeamInfo = require('../models/teaminfo');
var request = require('request');
const axios = require('axios');


module.exports = {
   index,
   show
};


function index(req, res) {

}

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



function teamList(req, res){{}
  let { teamId } = req.params
    var apiLink = {
        url: 'https://api.sportradar.us/ncaawb-t3/games/2018/REG/schedule.json?api_key=' + process.env.NCAAWB_TOKEN
    };
    console.log('requesting data from API');
    request(apiLink, function(err, response, body) {
        var teamData = JSON.parse(body);
        console.log(teamData);
        res.render('teaminfo/', {user:req.user, teamData});
       
    })
}
