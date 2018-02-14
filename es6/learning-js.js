// Learning JavaScript
// chapter 15 :Date and time

// Date to String 

const moment = require('moment-timezone');

const before = { d: new Date() };
console.log(before.d instanceof Date);

const json = JSON.stringify(before);
const after = JSON.parse(json);

console.log(after.d instanceof Date);
console.log(typeof after.d);

after.d = new Date(after.d);

console.log(after.d instanceof Date);
