require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
// const api = new Easypost(process.env.testkey);
const api = new Easypost(process.env.prodkey);

// const trackArray = ['784333654822', '784333654822']

api.Tracker.retrieve('784333654822').then(s => { console.log(s) });