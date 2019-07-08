require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);
// const api = new Easypost(process.env.prodkey);

const trackArray = ['787810854521']

const tracker1 = new api.Tracker({
  tracking_code: trackArray[0],
  carrier: "FedEx"
});


tracker1.save().then(console.log).catch(err => console.log(err));


