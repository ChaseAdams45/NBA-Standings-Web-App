const config = require('./config.json')
const express = require('express');
const app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser');
const Joke = require("daddyjoke");
const axios = require('axios');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

function getStandings(response) {
  resp = JSON.parse(JSON.stringify(response.data));
  const teams = [];
  for (let i = 0; i < resp.response.length; i++) {
    let team_info = {};
    let curr = resp.response[i];
    team_info["name"] = curr.team.name;
    team_info["logo"] = curr.team.logo;
    team_info["win"] = curr.win.total;
    team_info["loss"] = curr.loss.total;
    team_info["rank"] = curr.conference.rank;
    teams.push(team_info);
  }

  return teams.sort(function(f, s) { return f.rank - s.rank });
}


// app.get('/', async function(req, res) {
//   let joke1;
//   const options = { method: 'GET', url: 'http://server.shawne.me:9161/jokes/random' };
//   await axios.request(options).then(function(response) {
//     joke1 = JSON.parse(JSON.stringify(response.data))
//   }).catch(function(error) {
//     console.error(error);
//   });
//   console.log(joke1);
//   res.render('example', { // Page to render must be in /views
//     config: config,
//     joke1: joke1
//   })
// });


app.get('/', async function(req, res) {
  let conf = req.query.conference;
  console.log(conf);
  let teams;
  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: { league: 'standard', season: 2022, conference: conf },
    headers: {
      'X-RapidAPI-Key': 'f7c4829970msh0c9ed3726d0da6ep1472eejsnbe870eba3fa1',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  await axios.request(options).then(function(response) {
    teams = getStandings(response);
  }).catch(function(error) {
    console.error(error);
  });
  console.log(teams);
  res.render('standings', { // Page to render must be in /views
    config: config,
    teams: teams,
    conf: conf
  })
});


// async function getRoster(teamID, year, callback) {
//   const options = {
//     method: 'GET',
//     url: 'https://api-nba-v1.p.rapidapi.com/players',
//     params: { team: teamID.toString(), season: year.toString() },
//     headers: {
//       "x-rapidapi-key": "f7c4829970msh0c9ed3726d0da6ep1472eejsnbe870eba3fa1",
//       "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
//     },
//   };
//   let resp;
//   axios.request(options).then(async function(response) {
//     resp = JSON.parse(JSON.stringify(response.data));
//     const names = [];
//     for (let i = 0; i < resp.response.length; i++) {
//       let name = resp.response[i].firstname;
//       name += " ";
//       name += resp.response[i].lastname;
//       names.push(name);
//     }
//     callback(names);
//   }).catch(function(error) {
//     console.error(error);
//   });
// }

// // getRoster(29, 2022, function(data) {
// //   console.log(data);
// // })

// function areTeammates(data, player1, player2) {
//   let teammates = false;
//   if (data.includes(player1) && data.includes(player2)) {
//     teammates = true;
//   }
//   return teammates
// }

// // getRoster(29, 2022, function(data) {
// //   let b = areTeammates(data, "Josh Hart", "Damian Lillard");
// //   console.log(b);
// // })

// async function everTeammates(player1, player2) {
//   let teammates = false;
//   for (let i = 1; i <= 30; i++) {
//     for (let j = 2015; j <= 2022; j++) {
//       getRoster(i, j, function(data) {
//         if (areTeammates(data, player1, player2)) {
//           teammates = true
//         }
//       })
//     }
//   }
// }
// //console.log(everTeammates("Josh Hart", "Damian Lillard"))

const port = config.port || 3000;
app.listen(port, function() {
  console.log(`Express App Started - Port: ${port}`);
});
