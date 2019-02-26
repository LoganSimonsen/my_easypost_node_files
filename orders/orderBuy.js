require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env; const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Order.retrieve('order_2510979c73204682b3c0cecf6c844956').then(order => {
    order.buy('UPS', 'GROUND').then(console.log).catch(console.error)
});

