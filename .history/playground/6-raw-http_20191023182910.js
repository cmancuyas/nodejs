const https = require('https');
const url =
  'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/14.55,121.03333?units=si&lang=en';

https.request(url, response => {
  let data = '';

  response.on('data', chunk => {
    console.log(chunk);
  });

  response.on('end', () => {});
});
