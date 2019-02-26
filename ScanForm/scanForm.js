require('dotenv').config();
require('babel-polyfill');
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

const scanForm = new api.ScanForm({
    shipments: ['shp_bb4b68161034487fae786254b0bcef1a']
});

scanForm.save().then(console.log);
