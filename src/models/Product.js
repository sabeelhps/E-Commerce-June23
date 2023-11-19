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
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, {versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;