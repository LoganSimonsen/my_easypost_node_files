require('dotenv').config()
require('babel-polyfill');
const {
  testkey,
  prodkey
} = process.env;

const EasyPost = require('@easypost/api');

const options = require('../options');

const apiKey = process.env.testkey; //test!
// const apiKey = process.env.prodkey; //prod!!

const api = new EasyPost(apiKey);

// set addresses
const toAddress = new api.Address({
  // name: 'EasyPost',
  // street1: '13271 Ventura Blvd',
  // city: 'Studio City',
  // state: 'CA',
  // zip: '91604',
  // phone: '415-123-4567',
  verify: ["delivery"],
  zip: "30308",
  name: "DIETZ & LYNCH CAPITAL",
  street1: "915 West Peachtree Street Northwest",
  city: "Atlanta",
  company: "ED LYNCH",
  phone: "(978) 225-8386",
  state: "GA",
  residential: false
});

const fromAddress = new api.Address({
  name: 'EasyPost',
  street1: '118 2nd Street',
  street2: '4th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
  phone: '415-123-4567'
  //   state: "CA",
  //   phone: "7072650100",
  //   street1: "5555 Broadway St",
  //   city: "American Canyon",
  //   zip: "94503",
  //   company: "Copper Peak Logistics",
  //   country: "US",
  //   street2: "Suite 100"
});

/* es5 with promises: */
// fromAddress.save().then(addr => {
//     fromAddyId = addr;
//   });

//   toAddress.save().then(addr => {
//     toAddyId = addr;
//   });
const parcel = new api.Parcel({
  length: 19.0,
  width: 12.3,
  height: 6.5,
  // predefined_package: "SmallFlatRateBox",
  weight: 5,
})
// const customsInfo = new api.CustomsInfo({
//   eel_pfc: 'NOEEI 30.37(a)',
//   customs_certify: true,
//   customs_signer: 'Steve Brule',
//   contents_type: 'merchandise',
//   contents_explanation: '',
//   restriction_type: 'none',
//   restriction_comments: '',
//   non_delivery_option: 'abandon',
//   contents_explanation: 'this is a box full of shredded news paper',
//   declaration: 'officially speaking, this box is filled with shredded news paper',
//   customs_items: [
//     new api.CustomsItem({
//       'description': 'Sweet shirts',
//       'quantity': 2,
//       'weight': 11,
//       'value': 23,
//       'hs_tariff_number': '654321',
//       'origin_country': 'US',
//     })],
// });

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // carrier_accounts: ["ca_ca1e89855bef47b6a613185112b5a18e"],
  // customs_info: customsInfo,
  options: {
    "alcohol": "1",
    // "print_custom_2_code": "PO",
    // "label_format": "PNG",
    "receiver_liquor_license": "false",
    // "label_date": "2018-09-17T00:00:00.000-0500",
    "delivery_confirmation": "ADULT_SIGNATURE",
    // "print_custom_1": "custom1code",
    // "print_custom_code_1": "PO",
    // "print_custom_2": "custom2text",
    // "print_custom_3": "custom3text",
    // "invoice_number": "INVOICE12345"
    // "print_custom_3_code": "DP"
    // payment: { type: "COLLECT" }
  }
})
// console.log(process.env.testkey, process.env.prodkey)
shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log);
// }).catch(console.log);

//============buy shipment by Service============
// shipment.save().then(buyShipment => {
//   shipment.buy("USPS", "FirstClassPackageInternationalService")
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// api.Shipment.retrieve('shp_a9132efe3ac54326bf7c415314ab36c0').then(s => {
//   s.buy(s.lowestRate(), 249.99).then(console.log);
// });