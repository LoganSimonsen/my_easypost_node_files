require('dotenv').config()
require('babel-polyfill');
const {
  testkey,
  prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

const trackArray = ['EZ2000000002', 'EZ7000000007']

const tracker1 = new api.Tracker({
  tracking_code: trackArray[0],
  carrier: 'USPS'
});


tracker1.save().then(console.log).catch(err => console.log(err));
