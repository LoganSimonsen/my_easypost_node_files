require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */
// const toAddress = new api.Address({ ... })
// const fromAddress = new api.Address({ ... })

const insurance = new api.Insurance({
    to_address: 'adr_c3c7528e092d4ed3abe1e68b58ae058d',
    from_address: 'adr_271eea6c60fa4b5484eeda19abab2eac',
    tracking_code: '5262957022',
    carrier: 'DHLExpress',
    amount: '100.00',
    reference: 'insuranceRef1'
});

insurance.save().then(console.log).catch(console.log);