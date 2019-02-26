require('dotenv').config();
require('babel-polyfill');
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

api.CarrierAccount.all().then(console.log);

