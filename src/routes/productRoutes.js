const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
});

// Show new form
router.get('/products/new', (req, res) => {
    res.render('products/new');
});

// Create
router.post('/products', async (req, res) => {
    const { name, imageUrl, desc, price } = req.body;
    await Product.create({ name, imageUrl, desc, price });
    res.redirect('/products');
});

// Show
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
        .populate('reviews');
    res.render('products/show', { product });
});

// Write edit route yourself

// Delete 
router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;

