const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Get geoCode
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
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
    title: 'About Page',
    message: 'about me',
    name: 'Kobe Mancuyas'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    message: 'this is a long message',
    name: 'Kobe Mancuyas'
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });
  } else {
    geoCode.geoCode(
      req.query.address,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          return res.send({
            error: error
          });
        } else {
          forecast.forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
              return res.send({
                error: error
              });
            } else {
              return res.send({
                location: location,
                forecast: forecastData,
                address: req.query.address
              });
            }
          });
        }
      }
    );
  }
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  }

  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    errorMessage: 'Help article not found',
    name: 'Kobe Mancuyas'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    errorMessage: 'Page not found',
    name: 'Kobe Mancuyas'
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
