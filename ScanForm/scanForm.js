require('dotenv').config();
require('babel-polyfill');
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

const scanForm = new api.ScanForm({
    shipments: ['batch_...']
});

scanForm.save().then(console.log);
