const fs = require('fs');

const textin = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textin);

const textOut = `This is what we know about the avocado ${textin}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/Output.txt', textOut);

console.log('File written!');