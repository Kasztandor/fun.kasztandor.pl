const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

//make / directory use index directory
app.use(express.static(path.join(__dirname, 'index')));

let games = {};
fs.readdirSync(path.join(__dirname, 'games')).forEach(file => {
  //if file is a directory
  if(fs.lstatSync(path.join(__dirname, 'games', file)).isDirectory()) {
    //make /game directory use game directory
    app.use(`/${file}`, express.static(path.join(__dirname, 'games', file)));
    //if file exist
    if(fs.existsSync(path.join(__dirname, 'games', file, 'info.json'))) {
      //read file and add to games object
      games[file] = JSON.parse(fs.readFileSync(path.join(__dirname, 'games', file, 'info.json')));
    }
  }
})
app.get('/games.json', (req, res) => {
  res.json(JSON.stringify(games));
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});