require('dotenv').config()
require('babel-polyfill');
require('@easypost/api/easypost.8-lts.js');

const EasyPost = require('@easypost/api');
const apiKey = process.env.testkey;

require('@easypost/api/easypost.8-lts.js');

const api = new EasyPost(apiKey);

const batch = api.Batch.retrieve('batch_f00aed215f3148e3a624b98b54b31c48').then(b => {
    b.generateLabel('ZPL').then(console.log).catch(err => console.log(err));
}).catch(err => console.log(err));


