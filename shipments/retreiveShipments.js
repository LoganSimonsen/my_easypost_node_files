require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Shipment.retrieve('shp_9c6f427d222b43e7b11f8a6cf9419119').then(console.log);


//shp_9c6f427d222b43e7b11f8a6cf9419119