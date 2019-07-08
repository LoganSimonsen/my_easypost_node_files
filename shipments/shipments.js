require('dotenv').config()
require('babel-polyfill');
// const {
//   testkey,
//   prodkey
// } = process.env;

const EasyPost = require('@easypost/api');

const options = require('../options');
const defaultToAddress = require('../addresses/defaultToAddress');
const defaultFromAddress = require('../addresses/defaultFromAddress');

const apiKey = process.env.testkey; //test!
// const apiKey = process.env.prodkey; //prod!!

const api = new EasyPost(apiKey);

const parcel = new api.Parcel({
  length: 3,
  width: 7,
  height: 1,
  // predefined_package: "letter",
  weight: 1,
})

// const toAddress = new api.Address({
//   "name": "Danielle Kane",
//   "street1": "1005 - 100 Western Battery Rd",
//   "street2": "",
//   "city": "Los Angeles",
//   "state": "CA",
//   "zip": "90058 3S2",
//   // "phone": "90058",
//   "country": "US"
// })

const fromAddress = new api.Address({
  "name": "test",
  "company": "test",
  "street1": "4491 Concession Rd 12",
  "city": "Toronto",
  "state": "ON",
  "country": "CA",
  "zip": "M5G 1X5",
  "phone": "1-888-123-3214"
});

const customsInfo = new api.CustomsInfo({
  // eel_pfc: null,
  // customs_certify: true,
  // customs_signer: 'Steve Brule',
  contents_type: 'merchandise',
  contents_explanation: '',
  restriction_type: 'none',
  restriction_comments: '',
  non_delivery_option: 'abandon',
  contents_explanation: 'this is a box',
  declaration: 'this box is filled with shredded news paper',
  customs_items: [
    new api.CustomsItem({
      'description': 'Sweet shirts',
      'quantity': 1,
      'weight': 1,
      'value': 1,
      'hs_tariff_number': '654321',
      'origin_country': 'US',
      'code': "12"
    })],
});

// adr_6a780466a79f4fedb1ad1fa07293dc6d to address
//adr_3103ce5d7e9b4e6ab63c87e792ef000c from address
const shipment = new api.Shipment({
  to_address: process.env.adr4_US,
  from_address: process.env.adr3_US,
  reference: "test 12345",
  parcel: parcel,
  carrier_accounts: [process.env.USPS],
  // customs_info: customsInfo,
  // is_return: true,
  // print_custom_by_name: { "INST": "123488686test" },
  // reference: "testReference",
  options: {
    // "bill_third_party_account": "755880442",
    // "bill_third_party_postal_code": "72712",
    // "bill_third_party_country": "US",
    //====required for CDL=======
    // pickup_min_datetime: '2019-04-25T07:00:00.000Z',
    // pickup_max_datetime: '2019-04-26T07:00:00.000Z',
    // delivery_min_datetime: '2019-04-28T07:00:00.000Z',
    // delivery_max_datetime: '2019-04-29T07:00:00.000Z',
    //===========================
    // print_custom: [
    //   {
    //     name: "barcode_title",
    //     value: "title"
    //   },
    //   {
    //     name: "barcode",
    //     value: "123456"
    //   },
    //   {
    //     name: "barcode_symbology",
    //     value: "CODE128B"
    //   }
    // ],
    // label_format: 'PNG',
    // label_size: '4x6',
    // machinable: true,
    print_custom_1: "printCustom1",
    print_custom_2: "printCustom2",
    // carrier_insurance_amount: "100",
    // print_custom_2_code: "PO",
    invoice_number: "INVOICE12345",
    print_custom_3: "printCustom3",
    // print_custom_3_code: "RMA",
    // HOLD_FOR_PICKUP: true,
    // label_size: 'EnvelopeSize10',
    //   ups_return_service: "electronic",
    // carrier_branded: true,
    // bill_third_party_account: "673324983",
    // "alcohol": "1",
    // "print_custom_2_code": "PO",
    // label_format: "PNG",
    // postage_label_inline: true,
    // label_date: '2018-12-19',
    // label_size: "4x6",
    // "receiver_liquor_license": "false",
    // "label_date": "2018-09-17T00:00:00.000-0500",
    // "delivery_confirmation": "ADULT_SIGNATURE",
    // "print_custom_1": "custom1code",
    // "print_custom_code_1": "PO",
    // "print_custom_2": "custom2text",
    // "print_custom_3": "custom3text",
    // "print_custom_3_code": "DP"
    // payment: { type: "COLLECT" }
    // saturday_delivery: true,
    // label_date: '2018-11-02'
  }
})

//======= Create shipment but don't buy ========
// shipment.save().then(console.log).catch(console.log);

// shipment.save().then(s => {console.log(s.messages)});
// console.log(process.env.adr1_US)

//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);

//============buy shipment by Service============
// shipment.save().then(buyShipment => {
//   shipment.buy("USPS", "Priority")
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// api.Shipment.retrieve('shp_5b13b49877954ac39e5820d9c99b6237').then(s => {
//   s.buy('rate_07830629ad60425795c044f7466c0af4').then(console.log);
// });

//============Environmental Variable Addresses ==================
// adr1_US = adr_4ba9ca8bb909449b804e0af1bf75435f # San Francisco, CA
// adr2_US = adr_071fe0a1073b4afab111254d0fa46b13 # Boston, MA
// adr3_US = adr_5d67863d207f4b73a937adeac60201ad # Oakland, CA
// adr4_US = adr_bb455bda318c45b4ba1e6c290401a927 # Chicago, IL
// adr5_US = adr_2e745a5226d245119bde186f7451c216 # Bronx, NY
// adr6_GB = adr_8fed944a33c6416399171ac619b1d5f9 # Manchester, GB
// adr7_ES = adr_00bff8947e744abe88afb3c51001497d # Madrid, ES
// adr8_AU = adr_d78579bd591b4ca78de01049856f4415 # Sydney, AU
// adr9_FR = adr_705617069a9a4f6d8ccc5b44bdf3c7c1 # Paris, FR
// adr10_NL = adr_fbb6cdc7d79343cdb3b1316fa3de7a20 # Nuenen, NL
// adr11_IT = adr_a02e9140fa6848f69ce5bbca1e5ebc4a # Pisa, IT
// adr12_NZ = adr_6714143bd4884f39861f39bf11e6c7ed # Hawke's Bay, NZ
// adr13_NZ = adr_27f8164d25c746ef90d632348688fd26 # Northland, NZ
// adr14_NZ = adr_ae74d96a3a704bfeaf22028a81d1c2c8 # Northland, NZ
// adr15_CA = adr_b62096b7a40940458dcefd5d79486da4 # Montreal, CA
// adr16_CA = adr_e1fc092198754970875d3afbe52456f8 # Vancouver, CA
// adr17_US = adr_beb087b0c7724056834243cf34d1997b # Santa Clara, CA
// adr18_SG = adr_44abbf7cb3444a2ba54c74f1169c2cee # Singapore, SG
// adr19_LR = adr_d34f1346bb504fafa0d52e6cdaf59e72 # Monrovia, LR
// adr20_US = adr_f27cb7fe33484425979408ed92eaf520 # APO, AP (military)
// adr21_DE = adr_ef2a6f25a28b48ad867740d669fc2b86 # Berlin, DE


// shp_ceb3535c0b2b445d9e04ba13e5feb699, shp_1a1972a9dc7a4223888563355dd1cd38, shp_97c0ccc3316c4c6787ca5e8032004ba2
// shp_789d46bb3ea94c388417c85eb1211724, shp_81b9c2c760384905b1961092fc2e8bc4, shp_d7b267749d35426a86610734062aa3a0