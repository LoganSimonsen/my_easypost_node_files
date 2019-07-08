require('dotenv').config()
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Shipment.retrieve('shp_b85cddbc6eb84da9ada86fb036ba5225').then(s => {
    s.buy('rate_569cf0d4cf5e4fec9dd20422707ab4f1').then(console.log);
});