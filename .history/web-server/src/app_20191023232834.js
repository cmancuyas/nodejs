const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.partialsPath(partialsPath);
//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Kobe Mancuyas'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page hbs'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page hbs',
    message: 'this is a long message'
  });
});

app.get('/weather', (req, res) => {
  res.send([
    {
      url:
        'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/12,114?units=si&lang=en',
      location: 'makati'
    }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
