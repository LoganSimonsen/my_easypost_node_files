require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

let searchName = "Frank";

//warning, this will refund/void all production labels in "pre_transit" status
api.Shipment.all({
    page_size: 100,
    start_datetime: '2018-12-25T00:00:00Z'
}).then(s => {
    for (i = 0; i < s.length; i++) {
        if (s[i].to_address.name.includes(searchName)) {
            console.log('name: ' + s[i].to_address.name,
                '| company: ' + s[i].to_address.company,
                '| tracking#: ' + s[i].tracker.id,
                '| ep shipmentid: ' + s[i].tracker.shipment_id);
        }

    }
});
