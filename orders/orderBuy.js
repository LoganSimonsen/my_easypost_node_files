require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env; const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Order.retrieve('order_1f410e26016949ac9ca558664ffbe125').then(order => {
    order.buy('USPS', 'Priority').catch(console.error)
});

