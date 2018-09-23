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

api.Batch.retrieve('batch_a9a9d6af5f614dcdaf8c4a1f393aefe4').then(b => {
    /* Once createScanForm is complete, a webhook will be
     * fired to indicate that the scan form was created. */
    console.log(b);
});
