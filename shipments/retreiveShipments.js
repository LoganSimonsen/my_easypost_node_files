require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

api.Shipment.retrieve('784333654822').then(function (response) {
    console.log(response.tracker.tracking_code, response.tracker.shipment_id);
});