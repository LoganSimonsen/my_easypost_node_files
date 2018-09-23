require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
require('@easypost/api/easypost.8-lts.js');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

// retrieve pickup
api.Pickup.retrieve('pickup_747c057469cb47feaf0800e21b40fced').then(console.log);

// retrieve and buy pickup
// api.Pickup.retrieve('pickup_...').then(p => {
//     p.buy('UPS', 'Same-day Pickup').catch(console.error);
//   });
