// Learning JavaScript
// chapter 15 :Date and time

// Moment js

const moment = require('moment-timezone');

const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();

console.log(d);
console.log(s);
