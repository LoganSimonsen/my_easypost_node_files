require('dotenv').config()
require('babel-polyfill');
require('@easypost/api/easypost.8-lts.js');

const EasyPost = require('@easypost/api');
const apiKey = process.env.testkey;
const api = new EasyPost(apiKey);

batch = new api.Batch({
    /* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
    shipments: ['shp_d9da7330ed7c4345aa92e3c28b1b893c']
});

batch.save().then(console.log);