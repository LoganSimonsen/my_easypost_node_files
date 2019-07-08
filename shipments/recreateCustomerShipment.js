require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
// const apiKey = process.env.prodkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {
  "created_at": "2019-06-27T18:40:05Z",
  "is_return": false,
  "messages": [
    {
      "type": "rate_error",
      "carrier": "USPS",
      "message": "Unable to retrieve USPS rates for non-US origin address."
    }
  ],
  "mode": "production",
  "options": {
    "label_format": "PNG",
    "label_size": "4x6",
    "delivery_confirmation": "SIGNATURE",
  },
  "reference": "26020",
  "status": "unknown",
  "tracking_code": "8408255731999404",
  "updated_at": "2019-06-27T18:40:24Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_37b5aca0f0b44f62928e5b004768b6a3",
    "object": "Address",
    "created_at": "2019-06-27T18:40:05Z",
    "updated_at": "2019-06-27T18:40:05Z",
    "name": "Edifier Enterprises Canada",
    "company": null,
    "street1": "Unit 9, 13511 Crestwood Place",
    "street2": null,
    "city": "Richmond",
    "state": "BC",
    "zip": "V6V2G1",
    "country": "CA",
    "phone": "6042325227",
    "email": "main@edifier.ca",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_5cfe011f86314a0c908d68c92bcaa182",
    "object": "Parcel",
    "created_at": "2019-06-27T18:40:05Z",
    "updated_at": "2019-06-27T18:40:05Z",
    "length": 22,
    "width": 14,
    "height": 18,
    "predefined_package": null,
    "weight": 832,
    "mode": "production"
  },
  "postage_label": {
    "object": "PostageLabel",
    "id": "pl_ac8f21e626e74a8eba823b5b377692e6",
    "created_at": "2019-06-27T18:40:23Z",
    "updated_at": "2019-06-27T18:40:24Z",
    "date_advance": 0,
    "integrated_form": "none",
    "label_date": "2019-06-27T18:40:23Z",
    "label_resolution": 300,
    "label_size": "4x6",
    "label_type": "default",
    "label_file_type": "image/png",
    "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20190627/ca8c0cb38d5e41de94eb1800ec0497f3.png",
    "label_pdf_url": null,
    "label_zpl_url": null,
    "label_epl2_url": null,
    "label_file": null
  },
  "rates": [
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "ExpeditedParcel",
      "carrier": "CanadaPost",
      "rate": "43.51",
      "currency": "CAD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 3,
      "delivery_date": null,
      "delivery_date_guaranteed": true,
      "est_delivery_days": 3,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_05ef1a0f5b3741e682b152889ab41078",
      "id": "rate_ea74d334d28546389cb5b64f0812ba38"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "Priority",
      "carrier": "CanadaPost",
      "rate": "158.15",
      "currency": "CAD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 2,
      "delivery_date": null,
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_05ef1a0f5b3741e682b152889ab41078",
      "id": "rate_b4b67808fc274b309462d0fed890d22a"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "RegularParcel",
      "carrier": "CanadaPost",
      "rate": "43.51",
      "currency": "CAD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 5,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": 5,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_05ef1a0f5b3741e682b152889ab41078",
      "id": "rate_9b672757cb4a436a88d71a8379e3efb2"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "Xpresspost",
      "carrier": "CanadaPost",
      "rate": "113.22",
      "currency": "CAD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": 2,
      "delivery_date": null,
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_05ef1a0f5b3741e682b152889ab41078",
      "id": "rate_63c4f5e4129543948c7c53064258837d"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "UPSStandard",
      "carrier": "UPS",
      "rate": "130.82",
      "currency": "CAD",
      "retail_rate": "130.82",
      "retail_currency": "CAD",
      "list_rate": "130.82",
      "list_currency": "CAD",
      "delivery_days": 2,
      "delivery_date": "2019-07-02T23:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_adf50819ce3f4051a13d07f797ad6e35",
      "id": "rate_fb7cfcd3c05d4f85b32f1a11a6ac1aae"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "Expedited",
      "carrier": "UPS",
      "rate": "287.77",
      "currency": "CAD",
      "retail_rate": "287.77",
      "retail_currency": "CAD",
      "list_rate": "287.77",
      "list_currency": "CAD",
      "delivery_days": 2,
      "delivery_date": "2019-07-02T23:30:00Z",
      "delivery_date_guaranteed": true,
      "est_delivery_days": 2,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_adf50819ce3f4051a13d07f797ad6e35",
      "id": "rate_86f86022f2474d629a5f935ca86561d7"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "NextDayAirSaver",
      "carrier": "UPS",
      "rate": "305.44",
      "currency": "CAD",
      "retail_rate": "305.44",
      "retail_currency": "CAD",
      "list_rate": "305.44",
      "list_currency": "CAD",
      "delivery_days": 1,
      "delivery_date": null,
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_adf50819ce3f4051a13d07f797ad6e35",
      "id": "rate_1dd629c7d29143a7afa6afdf91a7b490"
    },
    {
      "object": "Rate",
      "created_at": "2019-06-27T18:40:07Z",
      "updated_at": "2019-06-27T18:40:07Z",
      "mode": "production",
      "service": "NextDayAir",
      "carrier": "UPS",
      "rate": "319.71",
      "currency": "CAD",
      "retail_rate": "319.71",
      "retail_currency": "CAD",
      "list_rate": "319.71",
      "list_currency": "CAD",
      "delivery_days": 1,
      "delivery_date": null,
      "delivery_date_guaranteed": true,
      "est_delivery_days": 1,
      "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
      "carrier_account_id": "ca_adf50819ce3f4051a13d07f797ad6e35",
      "id": "rate_6d125337b4a248ad963510c1b2f4fdac"
    }
  ],
  "refund_status": null,
  "scan_form": null,
  "selected_rate": {
    "id": "rate_ea74d334d28546389cb5b64f0812ba38",
    "object": "Rate",
    "created_at": "2019-06-27T18:40:07Z",
    "updated_at": "2019-06-27T18:40:07Z",
    "mode": "production",
    "service": "ExpeditedParcel",
    "carrier": "CanadaPost",
    "rate": "43.51",
    "currency": "CAD",
    "retail_rate": null,
    "retail_currency": null,
    "list_rate": null,
    "list_currency": null,
    "delivery_days": 3,
    "delivery_date": null,
    "delivery_date_guaranteed": true,
    "est_delivery_days": 3,
    "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
    "carrier_account_id": "ca_05ef1a0f5b3741e682b152889ab41078"
  },
  "tracker": {
    "id": "trk_88e8f2469fc9473aa9a1488dbb08d614",
    "object": "Tracker",
    "mode": "production",
    "tracking_code": "8408255731999404",
    "status": "unknown",
    "status_detail": "unknown",
    "created_at": "2019-06-27T18:40:24Z",
    "updated_at": "2019-06-27T18:40:24Z",
    "signed_by": null,
    "weight": null,
    "est_delivery_date": null,
    "shipment_id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
    "carrier": "CanadaPost",
    "tracking_details": [],
    "carrier_detail": null,
    "finalized": false,
    "is_return": false,
    "public_url": "https://track.easypost.com/djE6dHJrXzg4ZThmMjQ2OWZjOTQ3M2FhOWExNDg4ZGJiMDhkNjE0",
    "fees": []
  },
  "to_address": {
    "id": "adr_c611120ff9a24465a91d7f94c3573b7b",
    "object": "Address",
    "created_at": "2019-06-27T18:40:05Z",
    "updated_at": "2019-06-27T18:40:05Z",
    "name": "Cole Irmen",
    "company": null,
    "street1": "141 Fontaine Crescent",
    "street2": "6",
    "city": "Fort McMurray",
    "state": "AB",
    "zip": "T9H 0C9",
    "country": "CA",
    "phone": "17807131046",
    "email": "cole_irmen606@hotmail.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_37b5aca0f0b44f62928e5b004768b6a3",
    "object": "Address",
    "created_at": "2019-06-27T18:40:05Z",
    "updated_at": "2019-06-27T18:40:05Z",
    "name": "Edifier Enterprises Canada",
    "company": null,
    "street1": "Unit 9, 13511 Crestwood Place",
    "street2": null,
    "city": "Richmond",
    "state": "BC",
    "zip": "V6V2G1",
    "country": "CA",
    "phone": "6042325227",
    "email": "main@edifier.ca",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_c611120ff9a24465a91d7f94c3573b7b",
    "object": "Address",
    "created_at": "2019-06-27T18:40:05Z",
    "updated_at": "2019-06-27T18:40:05Z",
    "name": "Cole Irmen",
    "company": null,
    "street1": "141 Fontaine Crescent",
    "street2": "6",
    "city": "Fort McMurray",
    "state": "AB",
    "zip": "T9H 0C9",
    "country": "CA",
    "phone": "17807131046",
    "email": "cole_irmen606@hotmail.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "forms": [],
  "fees": [
    {
      "object": "Fee",
      "type": "LabelFee",
      "amount": "0.01000",
      "charged": true,
      "refunded": false
    }
  ],
  "id": "shp_af7c561e05cd4d6ead6b63699e1ae9a5",
  "object": "Shipment"
}//<<<<< shipment JSON object goes here like {}
//============= 

const shipment = new api.Shipment({
  to_address: ship.to_address,
  from_address: ship.from_address,
  parcel: ship.parcel,
  // customs_info: ship.customs_info,
  carrier_accounts: ["ca_4a5b3758de3544c0b942403d0f4d4732"],
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