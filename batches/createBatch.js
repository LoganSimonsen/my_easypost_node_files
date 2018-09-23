const apiKey = 'YWlCilzRkxG0vj1lctHBWw';
require('@easypost/api/easypost.8-lts.js');

const EasyPost = require('@easypost/api');
const apiKey = 'YWlCilzRkxG0vj1lctHBWw';
const api = new EasyPost(apiKey);

batch = new api.Batch({
    /* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
    shipments: ['shp_d9da7330ed7c4345aa92e3c28b1b893c'],
    options: {
        label_format: "PDF",
        label_size: "4x6"
    }
});

batch.save().then(console.log);