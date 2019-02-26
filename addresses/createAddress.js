require('dotenv').config()
require('babel-polyfill');

require('@easypost/api/easypost.8-lts.js');

const apiKey = process.env.testkey;
const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);
const options = require('../options');
// const to_address = require('../addresses/defaultToAddress')

// set addresses
const addy = {
    "object": "Address",
    "created_at": "2019-02-11T15:02:43Z",
    "updated_at": "2019-02-11T15:02:43Z",
    "name": "Philip Levy",
    "company": null,
    "street1": "1313 N Ritchie Ct #901",
    "street2": null,
    "city": "Chicago",
    "state": "IL",
    "zip": "61610-2175",
    "country": "US",
    "phone": "441895637302",
    "email": "Philipmlevy@blueyonder.co.uk",
    "mode": "production",
    "carrier_facility": null,
    "residential": true,
    "federal_tax_id": null,
    "state_tax_id": null,
    "id": "adr_8aa64923e9c04f79af704328b56a09f8",
    "verifications": []
  }

const toAddress = new api.Address(
    {
        name: addy.name,
        street1: addy.street1,
        street2: addy.street2,
        city: addy.city,
        state: addy.state,
        zip: addy.zip,
        country: addy.country,
        verify: ["delivery", "zip4"]
    }
);

// "to_address":{"name":"Antonio Sustiel","street1":"5950 Anglers Ave","street2":"","city":"Fort Lauderdale","state":"FL","zip":"33312","company":"Flooring King - Home Of The 100% Waterproof Flooring","phone":"(954) 253-7095"

// const toAddress = to_address;
// console.log(process.env.adr1_US, process.env.adr2_US);

toAddress.save().then(response => console.log(response)).catch(console.log); //doing JSON.stringify here to capture the entire json reponse body
// adr_6a780466a79f4fedb1ad1fa07293dc6d to address
//adr_3103ce5d7e9b4e6ab63c87e792ef000c from address

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