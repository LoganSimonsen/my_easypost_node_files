require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Shipment.retrieve('shp_19bc77cad4c94c3383fe31f576fec01f').then(s => {
    s.refund(console.log(s));
});