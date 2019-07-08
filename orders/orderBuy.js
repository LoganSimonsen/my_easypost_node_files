require('dotenv').config()
require('babel-polyfill');


const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Order.retrieve('order_d018cbc7f49241beb5cd788b2b60a6c0').then(order => {
    order.buy('DHLexpress', 'domesticexpress').then(console.log).catch(console.error)
});
