require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

//this endpoing retrieves a list shipments based on date range https://www.easypost.com/docs/api#shipments-list-codesample
api.Shipment.all({
    page_size: 100,
    start_datetime: yesterday, // should be less than 30 days.
}).then(s => {
    //iterate through shipments and find canada post shipments to manifest that were created after yesterday
    for (i = 0; i < s.length; i++) {
        if (s[i].postage_label.label_date > yesterday && s[i].postage_label.carrier === "CanadaPost") {
            console.log("manifesting " + s[i].id)
            // now we are going to scan form each shipment we found https://www.easypost.com/docs/api#scan-form
            const scanForm = new api.ScanForm({
                shipments: [s[i].id]
            });
            scanForm.save().then(console.log);
        }
    }
});