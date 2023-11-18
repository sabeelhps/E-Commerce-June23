const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('fetching all the products.....');
});

module.exports = router;

