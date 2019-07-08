require('dotenv').config()
require('babel-polyfill');

const EasyPost = require('@easypost/api');
const apiKey = process.env.testkey;

require('@easypost/api/easypost.8-lts.js');

const api = new EasyPost(apiKey);

const batch = api.Batch.retrieve('batch_b5d2823d7ab748cf95341ef29a884416');

/* Batch will return whether or not the batch operation was
 * created - not the shipments itself. You will need to
 * listen to a webhook event to confirm once the shipments
 * are associated. */
batch.addShipments(['shp_d9da7330ed7c4345aa92e3c28b1b893c']).then(console.log);