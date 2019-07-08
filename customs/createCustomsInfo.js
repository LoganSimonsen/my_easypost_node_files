require('dotenv').config()
require('babel-polyfill');

const EasyPost = require('@easypost/api');

const apiKey = process.env.testkey; //test!
// const apiKey = process.env.prodkey; //prod!!

const api = new EasyPost(apiKey);

const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',

    /* customs_items can be passed in as instances or ids.
    *  if the item does not have an id, it will be created. */
    customs_items: [
        new api.CustomsItem({
            'description': 'Plain and simple - get 50% off when subscribing to a second Box of Crafts. If you already have a Box of Crafts subscription, contact us to upgrade to a Sibling subscription. Sibling Boxes are combined and sent to a single address. We are still guessi',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US'
        })],
});

customsInfo.save().then(console.log);

