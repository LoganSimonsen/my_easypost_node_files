require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Shipment.retrieve('shp_95a1ac31dffa483d81cc25860f2dfb59').then(s => {
    s.refund(console.log(s));
}).catch(console.log);