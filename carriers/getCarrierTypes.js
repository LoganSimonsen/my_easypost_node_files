require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

api.CarrierAccount.types().then(console.log);