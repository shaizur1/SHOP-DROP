const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product = new Schema({
    name: {type: String},
    company: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String}
}, {collection: 'Products'});

module.exports = mongoose.model('Product', Product);