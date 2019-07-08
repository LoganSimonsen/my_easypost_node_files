require('dotenv').config()
require('babel-polyfill');

const Easypost = require('@easypost/api');
const api = new Easypost(process.env.prodkey);

// If no user id is passed in, the user returned is the owner of the api key.
api.User.retrieve('').then(u => {
    u.SurePost = 'Y';
    u.save().then(r => {
        console.log(r);
    }).catch(console.error);
});

