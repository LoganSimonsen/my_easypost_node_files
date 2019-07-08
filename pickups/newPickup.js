require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);
require('@easypost/api/easypost.8-lts.js');

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// const address = new api.Address({
//     name: 'EasyPost',
//     street1: 'Ferris Dr 6410',
//     city: 'Houston',
//     state: 'TX',
//     zip: '77081',
//     phone: '5481855189',
// });

const shipment = 'shp_e75fe39f3f5c47df803c60d9eb8839c8';
const address = 'adr_58ded62e968b432088474e8b7ea2a1eb';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'Purolator-pickup',
    min_datetime: '2019-06-19 09:00:00',
    max_datetime: '2019-06-19 15:00:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
});

pickup.save().then(console.log);