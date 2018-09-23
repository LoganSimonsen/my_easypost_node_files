// import "babel-polyfill";
//test API key
const apiKey = 'YWlCilzRkxG0vj1lctHBWw';
require('@easypost/api/easypost.8-lts.js');

const EasyPost = require('@easypost/api');

const api = new EasyPost(apiKey);

// set addresses
const toAddress = new api.Address({
  name: 'EasyPost',
  street1: '13271 Ventura Blvd',
  street2: '4th Floor',
  city: 'Studio City',
  state: 'CA',
  zip: '91604-1836',
  phone: '415-123-4567'
});

const fromAddress = new api.Address({
  name: 'George M Hennenfent',
  street1: '123 test ST',
  city: 'Tokyos',
  state: '',
  zip: '450000',
  country: 'JP',
  phone: '',
  verify: ['delivery']
});

/* es5 with promises: */
fromAddress.save().then(addr => {
  console.log(addr.id);
}).catch(err => console.log(err));

/* es2017 with async/await: */
// await fromAddress.save();
// console.log(fromAddress.id);