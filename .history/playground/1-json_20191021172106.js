const fs = require('fs');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Kimbee Mancuyas'
// };

// const bookJSON = JSON.stringify(book);

// // console.log(bookJSON);

// // const parsedJSONBook = JSON.parse(bookJSON);
// // console.log(parsedJSONBook.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const JSONData = require('./1-json.json');
console.log(JSONData);

const stringifyJSON = JSON.stringify(JSONData);
console.log(stringifyJSON);

const parsedJSON = JSON.parse(stringifyJSON);
console.log(parsedJSON.name);
console.log(parsedJSON.planet);
console.log(parsedJSON.age);
