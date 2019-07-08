require('dotenv').config()
require('babel-polyfill');

const apiKey = process.env.testkey; //test!
// const apiKey = process.env.prodkey; //prod!!

const api = new EasyPost(apiKey);

const EasyPost = require('@easypost/api');

const user = new api.User({
    name: 'Logans precious child',
})

user.save().then(u => console.log(u.id));