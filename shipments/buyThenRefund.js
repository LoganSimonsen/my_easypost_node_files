require('dotenv').config()
require('babel-polyfill');

const EasyPost = require('@easypost/api');
// const apiKey = process.env.testkey; //test!
const apiKey = process.env.prodkey; //prod!
const api = new EasyPost(apiKey);

const parcel = new api.Parcel({
  length: 2,
  width: 4,
  height: 6,
  weight: 80,
})

const shipment = new api.Shipment({
  to_address: process.env.adr1_US, // an address ID that you've already created would go here
  from_address: process.env.adr2_US, // an address ID that you've already created would go here
  parcel: parcel,
  carrier_accounts: ["ca_025ccf9ca68e46fda5872076351fd297"],
})

//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(s => {
      s.refund(s).then(sh => console.log(sh));
    })
}).catch(console.log);



