const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(productRoutes);




module.exports = app;


