require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

api.Shipment.all({
    page_size: 100,
    start_datetime: '2019-03-01T00:00:00Z'
}).then(s => {
    console.log('shipment_id, carrierAccount, rate,');
    for (i = 0; i < s.length; i++) {
        if (s[i].selected_rate) {
            console.log(s[i].id + ", " + s[i].selected_rate.carrier + ", " + s[i].selected_rate.carrier_account_id + ", " + s[i].selected_rate.rate);
        }

    }
});
