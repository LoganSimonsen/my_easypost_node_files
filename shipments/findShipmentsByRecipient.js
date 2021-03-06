require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

let searchName = "testReference";

api.Shipment.all({
    page_size: 100,
    start_datetime: '2019-03-01T00:00:00Z'
}).then(s => {
    for (i = 0; i < s.length; i++) {
        if (s[i].to_address.name && s[i].to_address.name.includes(searchName)) {
            console.log('selected_rate: ' + s[i].reference,
                '| tracking#: ' + s[i].tracker.id,
                '| ep shipmentid: ' + s[i].tracker.shipment_id);
        }

    }
});
