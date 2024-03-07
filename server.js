const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

//make / directory use index directory
app.use(express.static(path.join(__dirname, 'index')));

let games = {};
fs.readdirSync(path.join(__dirname, 'games')).forEach(file => {
  if(fs.lstatSync(path.join(__dirname, 'games', file)).isDirectory()) {
    app.use(`/${file}`, express.static(path.join(__dirname, 'games', file)));
    if(fs.existsSync(path.join(__dirname, 'games', file, 'info.json'))) {
      games[file] = JSON.parse(fs.readFileSync(path.join(__dirname, 'games', file, 'info.json')));
    }
  }
})
app.use(cors());
app.get('/games.json', (req, res) => {
  res.json(JSON.stringify(games));
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
