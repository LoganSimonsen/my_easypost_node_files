require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
require('@easypost/api/easypost.8-lts.js');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

// retrieve pickup
// api.Pickup.retrieve('pickup_747c057469cb47feaf0800e21b40fced').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_8e5047d9de2640a78f75be08199120f0').then(p => {
    p.buy('Purolator', 'PurolatorPickup').catch(console.error);
});
