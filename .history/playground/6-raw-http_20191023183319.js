const https = require('https');
const url =
  'https://api.darksky.net/forecast/bd5d5afae096a827d2ac34f18560115e/14.55,121.03333?units=si&lang=en';

const request = https.request(url, response => {
  let data = '';

  response.on('data', chunk => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
  });
});

request.end();
