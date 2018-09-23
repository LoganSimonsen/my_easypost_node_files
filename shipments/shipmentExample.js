require('dotenv').config()
require('babel-polyfill');
const {
  testkey,
  prodkey
} = process.env;
require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);
// const options = require('./options');

// set addresses
const toAddress = new api.Address({
  company: 'EasyPost',
  street1: '118 2nd Street',
  // street2: '4th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
  // verify: 'delivery'
});

const fromAddress = new api.Address({
  company: 'EasyPost',
  street1: '118 2nd Street',
  // street2: '4th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
});


// const customsInfo = new api.CustomsInfo({
//   eel_pfc: 'NOEEI 30.37(a)',
//   customs_certify: true,
//   customs_signer: 'Steve Brule',
//   contents_type: 'merchandise',
//   contents_explanation: '',
//   restriction_type: 'none',
//   restriction_comments: '',
//   non_delivery_option: 'abandon',
//   customs_items: [
//     new api.CustomsItem({
//       'description': 'Sweet shirts',
//       'quantity': 2,
//       'weight': 11,
//       'value': 23,
//       'hs_tariff_number': '654321',
//       'origin_country': 'US'
//     })],
// });

fromAddress.save();

toAddress.save();

const parcel = new api.Parcel({
  length: 20,
  width: 17,
  height: 1.75,
  predefined_package: null,
  weight: 11,
})

parcel.save();

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel

})

shipment.save().then(console.log).catch(console.log);


shipment.buy(shipment.lowestRate(), 249.99).catch(err => console.log(err))

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_abaf35c0a3624505b4bc51e4eb9f3d5a').then(s => {
//   s.buy('rate_2c6b01b63c5545bd95bc984ac6e8e64e').then(console.log);
// });

//shp_b2477f87a69244f4b81024cf46d2660d

