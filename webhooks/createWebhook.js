require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);
// const api = new Easypost(process.env.prodkey);

const webhook = new api.Webhook({
    url: 'https://webhook.site/e3148d28-9299-48ec-a552-8c5f70ca4052'
});

webhook.save().then(console.log);


// b {
//     _validationErrors: null,
//     url: 'https://webhook.site/639d99fb-1ff9-48b6-b8fd-3a73f40311af',
//     id: 'hook_5a26329f0ad74d09a29db53b5f4d14a3',
//     object: 'Webhook',
//     mode: 'test',
//     disabled_at: null }

// b {
//     _validationErrors: null,
//     url: 'http://logantestwebhooks.requestcatcher.com/',
//     id: 'hook_e80eeea44c72410ba19fb53a7592fc86',
//     object: 'Webhook',
//     mode: 'test',
//     disabled_at: null }