require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
// const apiKey = process.env.prodkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {
  "created_at": "2019-02-20T18:50:16Z",
  "is_return": false,
  "messages": [],
  "mode": "test",
  "options": {
    "label_format": "PNG",
    "label_date": "2019-02-20T18:49:39+00:00",
    // "incoterm": "DDU",
    "bill_third_party_account": "Y77524",
    "bill_third_party_postal_code": "48105",
    "bill_third_party_country": "US",
    // "machinable": true,
    "print_custom_1_code": "PO",
    "print_custom_3_code": "DP",
    "cost_center": "999",
    "currency": "USD",
    // "delivered_duty_paid": false,
    "date_advance": 0
  },
  "reference": "DN1548191115395",
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2019-02-20T18:50:16Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": {
    "id": "cstinfo_8df7da7eb7844926b061d83f3328358d",
    "object": "CustomsInfo",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "contents_explanation": null,
    "contents_type": "merchandise",
    "customs_certify": false,
    "customs_signer": null,
    "eel_pfc": null,
    "non_delivery_option": "return",
    "restriction_comments": null,
    "restriction_type": "none",
    "mode": "test",
    "declaration": null,
    "customs_items": [
      {
        "id": "cstitem_b8262f70973e46cbb18b07c4b67491ca",
        "object": "CustomsItem",
        "created_at": "2019-02-20T18:50:16Z",
        "updated_at": "2019-02-20T18:50:16Z",
        "description": "CORD",
        "hs_tariff_number": "",
        "origin_country": "US",
        "quantity": 35,
        "value": "35.0",
        "weight": 2800,
        "code": null,
        "mode": "test",
        "manufacturer": null,
        "currency": "USD"
      }
    ]
  },
  "from_address": {
    "id": "adr_95c14ddabbf74dba99ac6ecc3a9f1d48",
    "object": "Address",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "name": "Shipping Department",
    "company": "Accellos Columbus",
    "street1": "47115 Five Mile Rd",
    "street2": "Room 317",
    "city": "Plymouth",
    "state": "MI",
    "zip": "48170",
    "country": "US",
    "phone": "8005555555",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_29d44d4ab7244dc2844fcfb7d9a491f6",
    "object": "Parcel",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "length": 12,
    "width": 18,
    "height": 12,
    "predefined_package": null,
    "weight": 179.04,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_77bc6d3e82f24f07897472ad21e34d0d",
    "object": "Address",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "name": "Someone",
    "company": "Hak",
    "street1": "3333 Elsinore Ct",
    "street2": "",
    "city": "Ann Arbor",
    "state": "MI",
    "zip": "48105",
    "country": "US",
    "phone": "7346788318",
    "email": "hakyu.tang@truecommerce.com",
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 1,
  "return_address": {
    "id": "adr_95c14ddabbf74dba99ac6ecc3a9f1d48",
    "object": "Address",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "name": "Shipping Department",
    "company": "Accellos Columbus",
    "street1": "47115 Five Mile Rd",
    "street2": "Room 317",
    "city": "Plymouth",
    "state": "MI",
    "zip": "48170",
    "country": "US",
    "phone": "8005555555",
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_77bc6d3e82f24f07897472ad21e34d0d",
    "object": "Address",
    "created_at": "2019-02-20T18:50:16Z",
    "updated_at": "2019-02-20T18:50:16Z",
    "name": "Someone",
    "company": "Hak",
    "street1": "3333 Elsinore Ct",
    "street2": "",
    "city": "Ann Arbor",
    "state": "MI",
    "zip": "48105",
    "country": "US",
    "phone": "7346788318",
    "email": "hakyu.tang@truecommerce.com",
    "mode": "test",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2019-02-20T18:50:17Z",
      "updated_at": "2019-02-20T18:50:17Z",
      "mode": "test",
      "service": "SurePostOver1Lb",
      "carrier": "UPSSurePost",
      "rate": "18.73",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_0fa8cc80220c4991bd0b88c20714da20",
      "carrier_account_id": "ca_ae424efd17d6444aa030542e4bb44a20",
      "id": "rate_45d12fdc2407415c81f508472ad73d3a"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_0fa8cc80220c4991bd0b88c20714da20"
}//<<<<< shipment JSON object goes here like {}
//============= 

const shipment = new api.Shipment({
  to_address: ship.to_address,
  from_address: ship.from_address,
  parcel: ship.parcel,
  customs_info: ship.customs_info,
  carrier_accounts: ['ca_e3f8f03570d94bdea05c04f171bf242c'],
  options: ship.options,
  reference: "testreference"
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