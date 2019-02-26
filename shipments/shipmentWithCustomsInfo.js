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
const options = require('../options');

// set addresses
// const toAddress = new api.Address({
//   company: 'EasyPost',
//   street1: '343 Hampton Court',
//   city: 'Lake Charles',
//   state: 'LA',
//   zip: '70605',
//   // verify: 'delivery'
// });

// const fromAddress = new api.Address({
//   company: 'EasyPost',
//   street1: '118 2nd Street',
//   // street2: '4th Floor',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94105',
// });

const toAddress = new api.Address({
    // name: 'EasyPost',
    // street1: '118 2nd Street',
    // street2: '4th Floor',
    // city: 'San Francisco',
    // state: 'CA',
    // zip: '94105',
    phone: '415-123-4567',
    name: "Mark Mark",
    street1: "1018 72nd Ave NE",
    city: "Calgary",
    state: "AB",
    zip: "T2E8V9",
    country: "CA",
});

const fromAddress = new api.Address({
    // name: 'EasyPost',
    // street1: '13271 Ventura Blvd',
    // city: 'Studio City',
    // state: 'CA',
    // zip: '91604',
    // phone: '415-123-4567',
    name: "Mark Mark",
    street1: "379 Oyster Point Blvd",
    city: "South San Francisco",
    state: "CA",
    zip: "94080",
    country: "US",
    phone: '415-123-4567',
}
)

fromAddress.save();

toAddress.save();

const customsInfo = new api.CustomsInfo({
    // eel_pfc: null,
    // customs_certify: true,
    // customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    contents_explanation: 'this is a box full of shredded news paper',
    declaration: 'officially speaking, this box is filled with shredded news paper',
    customs_items: [
        new api.CustomsItem({
            'description': 'Sweet shirts',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US',
        }),
        new api.CustomsItem({
            'description': 'Sweet shirts',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US',
        }),
    ],
});

const parcel = new api.Parcel({
    length: 12,
    width: 8,
    height: 3,
    predefined_package: null,
    weight: 16.4,
    mode: 'production'
})

parcel.save();

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    options: {
        // suppress_etd: "true",

    },
    carrier_accounts: ['ca_c895919c23164f9eb125173714c2ba69']

})

// shipment.save().then(console.log).catch(console.log);


// ============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
    shipment.buy(shipment.lowestRate())
        .then(console.log);
}).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_abaf35c0a3624505b4bc51e4eb9f3d5a').then(s => {
//   s.buy('rate_2c6b01b63c5545bd95bc984ac6e8e64e').then(console.log);
// });

//shp_b2477f87a69244f4b81024cf46d2660d

//====== customs schema
// CREATE TABLE`customs_infos`(
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `public_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `user_id` int(11) DEFAULT NULL,
//     `integrated_form_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `customs_certify` tinyint(1) DEFAULT NULL,
//     `customs_signer` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `contents_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `contents_explanation` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `restriction_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `restriction_comments` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `non_delivery_option` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `eel_pfc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `created_at` datetime NOT NULL,
//     `updated_at` datetime NOT NULL,
//     `mode` varchar(255) COLLATE utf8_bin DEFAULT NULL,
//     `declaration` text COLLATE utf8_bin,
//     PRIMARY KEY(`id`),
//     UNIQUE KEY`index_customs_infos_on_public_id`(`public_id`),
//     KEY`index_customs_infos_on_mode`(`mode`),
//     KEY`index_customs_infos_on_user_id`(`user_id`)
// ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_bin;

