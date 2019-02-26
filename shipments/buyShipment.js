require('dotenv').config()
const Easypost = require('@easypost/api');
const api = new Easypost(process.env.testkey);

api.Shipment.retrieve('shp_83b4b48941614767899604882299e9db').then(s => {
    s.buy('rate_4527b2bbe66f4220967f0e6ccabca412').then(console.log);
});