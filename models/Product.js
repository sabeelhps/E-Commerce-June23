const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    }
}, {versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;