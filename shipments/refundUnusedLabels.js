require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

//warning, this will refund/void all production labels in "pre_transit" status
api.Shipment.all({
    page_size: 100,
    start_datetime: '2019-02-06',
}).then(s => {
    console.log(s)
});
