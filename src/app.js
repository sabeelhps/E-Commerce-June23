const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

//Routes
const productRoutes = require('./routes/productRoutes');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(productRoutes);

module.exports = app;


