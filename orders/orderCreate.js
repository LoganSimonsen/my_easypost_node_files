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

const shipmentTester = new api.Shipment({
    parcel: {
        length: 19.0,
        width: 12.3,
        height: 6.5,
        // predefined_package: "Card",
        weight: 170,
    },
})



const toAddress = new api.Address({
    zip: '96770',
    name: 'TEST TEST TEST',
    street1: 'B2-HOEA STREET',
    city: 'MAUNALOA',
    company: 'TEST TEST TEST',
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

const order = new api.Order({
    to_address: process.env.adr1_US,
    from_address: process.env.adr2_US,
    carrier_accounts: ['ca_c895919c23164f9eb125173714c2ba69'],
    // customs_info: {
    //     contents_type: 'merchandise',
    //     contents_explanation: '',
    //     restriction_type: 'none',
    //     restriction_comments: '',
    //     non_delivery_option: 'abandon',
    //     contents_explanation: 'this is a box full of shredded news paper',
    //     declaration: 'officially speaking, this box is filled with shredded news paper',
    //     customs_items: [
    //         new api.CustomsItem({
    //             'description': 'test test',
    //             'quantity': 1,
    //             'weight': 160,
    //             'value': 23,
    //             'hs_tariff_number': '654321',
    //             'origin_country': 'US',
    //         }),
    // new api.CustomsItem({
    //     'description': 'Sweet shirts',
    //     'quantity': 2,
    //     'weight': 11,
    //     'value': 23,
    //     'hs_tariff_number': '654321',
    //     'origin_country': 'US',
    // }),
    //     ]
    // },
    shipments: [
        new api.Shipment({
            parcel: {
                length: 19.0,
                width: 12.3,
                height: 6.5,
                // predefined_package: "Card",
                weight: 170,
            },
        }),
        new api.Shipment({
            parcel: {
                length: 19.0,
                width: 12.3,
                height: 6.5,
                // predefined_package: "Card",
                weight: 170,
            },
        }), shipmentTester,
    ]
});

order.save().then(console.log).catch(console.log);


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