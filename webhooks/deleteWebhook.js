require('dotenv').config()
require('babel-polyfill');
const {
    testkey,
    prodkey
} = process.env;
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Webhook.delete('hook_6bbc7408ae6e4ca480a56ce162fe0a17').then(console.log);