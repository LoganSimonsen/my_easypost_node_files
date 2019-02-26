require('dotenv').config();
require('babel-polyfill');
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

// first argument is the report type
const report = new api.Report({
    type: 'shipment',
    start_date: '2019-02-02',
    end_date: '2019-02-22'
})

report.save().then(console.log)
