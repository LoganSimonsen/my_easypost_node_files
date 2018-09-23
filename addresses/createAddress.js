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
const options = require('./options');

// set addresses
const toAddress = new api.Address({
    name: "Guy Man",
    street1: "5301 Corwin Dr",
    city: "Tallahasse",
    state: "FL",
    zip: "32303",
    country: "US",
    phone: "9099999999",
    verify: ["delivery"]
});

toAddress.save().then(console.log).catch(console.log);