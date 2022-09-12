const { readFileSync, read, writeFileSync } = require('fs');

writeFileSync('./my-file.txt', 'Invat Node.js', 'utf-8');
const data = readFileSync('./my-file.txt', 'utf-8');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const paddedDay = day < 10 ? `0${day}` : day;
const paddedMonth = month < 10 ? `0${month}` : month;

const payLoad = `${data}
Invat node.js, azi ${paddedDay}.${paddedMonth}.${year}.`;

writeFileSync('./hi.txt', payLoad, 'utf-8');
