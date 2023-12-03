const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Product = require('../models/Product');
const catchAsync = require('../core/catchAsync');

router.post('/products/:id/reviews', catchAsync(async (req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;
    const review = new Review({ rating, comment });
    const product = await Product.findById(id);
    product.reviews.push(review);
    await review.save();
    await product.save();
    req.flash('success', 'Review created successfully!');
    res.redirect(`/products/${id}`);
}));

module.exports = router;