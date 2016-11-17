console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


//console.log(_.isString(true));
//console.log(_.isString('Colin'));
//var user = os.userInfo();

var filteredArray = _.uniq(['Steve', 1, 'Colin', 1, 2, 3, 4, 4, 3, 4,]);
console.log(filteredArray);
//fs.appendFile('greetings.txt', `hello ${user.username}`);
