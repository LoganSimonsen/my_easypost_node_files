require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost('<YOUR_EASYPOST_API_KEY>');

for (i = 0; i++; i < id.length) {
    api.Shipment.retrieve(id[i]).then(s => {
        s.refund().then(() => console.log(s.id, "refund attempted", s.refund_status));
    }).catch(console.log);
}