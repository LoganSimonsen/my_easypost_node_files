require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// set addresses
const toAddress = new api.Address({
    // company: 'EasyPost',
    // street1: '343 Hampton Court',
    // city: 'Lake Charles',
    // state: 'LA',
    // zip: '70605',
    // // verify: 'delivery'
    street1: "641 Warrigal rd",
    street2: "",
    city: "Bentleigh East",
    state: "VIC",
    zip: "3165",
    country: "AU",
    residential: true,
    company: "",
    name: "first last",
    phone: "1234567890",
    email: "robin_tail@me.com"
});

const fromAddress = new api.Address({
    // company: 'EasyPost',
    // street1: '118 2nd Street',
    // // street2: '4th Floor',
    // city: 'San Francisco',
    // state: 'CA',
    // zip: '94105',
    street1: "105 Cochranes rd",
    city: "Moorabbin",
    state: "",
    zip: "3189",
    country: "AU",
    company: "Your Store",
    name: "Your Name",
    phone: "1234567890",
    email: "example@example.com"
});

const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 14.575747759549,
                width: 7.9,
                height: 7.9,
                length: 7.9,
                predefined_package: "Carton"
            }
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                predefined_package: "Carton"

            }
        })
    ]
});

order.save().then(console.log).catch(console.log);
