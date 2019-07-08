require('dotenv').config()
require('babel-polyfill');
require('@easypost/api/easypost.8-lts.js');

const EasyPost = require('@easypost/api');
const apiKey = process.env.testkey;

require('@easypost/api/easypost.8-lts.js');

const api = new EasyPost(apiKey);

batch = new api.Batch({
    /* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
    shipments: [
        'shp_ceb3535c0b2b445d9e04ba13e5feb699',
        'shp_1a1972a9dc7a4223888563355dd1cd38',
        'shp_97c0ccc3316c4c6787ca5e8032004ba2',
        'shp_789d46bb3ea94c388417c85eb1211724',
        'shp_81b9c2c760384905b1961092fc2e8bc4',
        'shp_d7b267749d35426a86610734062aa3a0'
    ]
});

batch.save().then(console.log);


// shp_ceb3535c0b2b445d9e04ba13e5feb699, shp_1a1972a9dc7a4223888563355dd1cd38, shp_97c0ccc3316c4c6787ca5e8032004ba2
// shp_789d46bb3ea94c388417c85eb1211724, shp_81b9c2c760384905b1961092fc2e8bc4, shp_d7b267749d35426a86610734062aa3a0