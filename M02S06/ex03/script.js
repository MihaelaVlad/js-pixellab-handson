const { readFileSync, read } = require('fs');

const data = readFileSync('./file.txt', 'utf-8');

console.log(`${data}
This is our node script!`);
