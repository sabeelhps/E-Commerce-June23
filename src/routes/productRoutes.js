const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const catchAsync = require('../core/catchAsync');
const { BadRequestError } = require('../core/ApiError');
const { isLoggedIn, isProductAuthor } = require('../middleware/auth');
const productController = require('../controllers/productController');

// Get all products
// router.get('/products', catchAsync(productController.getAllProducts));

// Show new form
// router.get('/products/new',isLoggedIn, productController.getNewProductsPage);

// Create
// router.post('/products',isLoggedIn, catchAsync(productController.createNewProduct));

// Show
// router.get('/products/:id',catchAsync(productController.showProduct));

// Write edit route yourself
// edit route
// router.get('/products/:id/edit',isLoggedIn, catchAsync(productController.showEditPage));

// update
// router.patch('/products/:id', isLoggedIn, isProductAuthor, catchAsync(productController.updateProduct));

// Delete 
// router.delete('/products/:id', isLoggedIn, catchAsync(productController.deleteProduct));

router.route('/products')
    .get('/', catchAsync(productController.getAllProducts))
    .get('/new', productController.getNewProductsPage)
    .post('/', isLoggedIn, catchAsync(productController.createNewProduct))
    .get('/:id', catchAsync(productController.showProduct))
    .get('/:id/edit', isLoggedIn, catchAsync(productController.showEditPage))
    .patch('/:id', isLoggedIn, isProductAuthor, catchAsync(productController.updateProduct))
    .delete('/:id', isLoggedIn, catchAsync(productController.deleteProduct));

module.exports = router;

