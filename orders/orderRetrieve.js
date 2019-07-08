require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Order.retrieve('order_93439b3d7645479d8bee3a7e4cfc0083').then((response) => {
    let shipArray = [];
    for (i = 0; i < response.shipments.length; i++) {
        shipArray.push(response.shipments[i].id)

    }
    console.log(shipArray)
})