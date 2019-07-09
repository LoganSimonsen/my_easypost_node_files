require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
// const apiKey = process.env.prodkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {}//<<<<< shipment JSON object goes here like {}
//============= 

const shipment = new api.Shipment({
  to_address: ship.to_address,
  from_address: ship.from_address,
  parcel: ship.parcel,
  // customs_info: ship.customs_info,
  carrier_accounts: [process.env.USPS],
  options: ship.options
})

// shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('NextDayAir')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_abaf35c0a3624505b4bc51e4eb9f3d5a').then(s => {
//   s.buy('rate_2c6b01b63c5545bd95bc984ac6e8e64e').then(console.log);
// });
