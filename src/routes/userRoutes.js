const express = require('express');
const router = express.Router();
const User = require('../models/User');
const catchAsync = require('../core/catchAsync');
const passport = require('passport');

// router.get('/fakeUser',async(req, res) => {
//     const user = new User({ username: 'Max', email: 'max@gmail.com' });
//     const fakeUser = await User.register(user, "1234");
//     res.send(fakeUser);
// });

router.get('/register', (req, res) => {
    res.render('users/signup');
});

router.post('/register',catchAsync(async(req, res) => {
    const { username, password, role, email } = req.body;
    const newUser = new User({ username, email, role });
    await User.register(newUser, password);
    res.redirect('/login');
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    req.flash('success', 'Welcome Back!');
    console.log('Inside login route');
    res.redirect('/products');
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            req.flash('error', 'Cannot logout at the moment!');
            return res.redirect('/products');
        }
        req.flash('success', 'Tata bye bye!');
        return res.redirect('/products');
    });
})

module.exports = router;