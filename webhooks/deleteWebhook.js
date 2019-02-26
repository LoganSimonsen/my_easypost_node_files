require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

api.Webhook.delete('hook_6535c83655a2407b93f09db0b6104257').then(console.log);