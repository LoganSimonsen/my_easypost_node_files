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
  zip: '96770',
  name: 'TEST TEST TEST',
  street1: 'B2-HOEA STREET',
  city: 'MAUNALOA',
  company: 'PAULINE JORDAN',
  phone: '8085520339',
  state: 'HI'
});

const fromAddress = new api.Address({
  state: 'IL',
  phone: '800-852-2205',
  street1: '2801 S Western Ave.',
  city: 'Chicago',
  zip: '60608',
  company: 'Allen Brothers'
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
  length: 21.3,
  height: 7.4,
  width: 13.3,
  weight: 304.8
})

parcel.save();

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  carrier_accounts: ['ca_44f8a78f150f4844aa269bd4741e299e'],
  options: {
    print_custom_2_code: 'PO',
    label_format: 'PNG',
    dry_ice: '1',
    dry_ice_medical: true,
    delivery_confirmation: 'NO_SIGNATURE',
    print_custom_1: '251 3954117.000',
    dry_ice_weight: '160',
    print_custom_3_code: 'DP'
  }

})

shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('NextDayAir')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_abaf35c0a3624505b4bc51e4eb9f3d5a').then(s => {
//   s.buy('rate_2c6b01b63c5545bd95bc984ac6e8e64e').then(console.log);
// });

//shp_b2477f87a69244f4b81024cf46d2660d

// https://easypost-admin.easypo.net/easy_post~shipment/717194377 - no ground rate returned with saturday delivery true
// https://easypost-admin.easypo.net/easy_post~shipment/717195375 - ground rate shows delivery for monday when label date is on a friday

// fax forms to 855-892-7588