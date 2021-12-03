const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoginIn, isNotLogIn } = require('../lib/auth');

//Ruta para renderizar los datos del formulario
router.get('/signup', isNotLogIn, (req, res) => {
    res.render('auth/signup');

});

//Ruta para recibir los datos del formulario

/* router.post('/signup', (req, res) => {
    //    console.log(req.body);
        passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    });

    res.send('/received');

}); */

//Opción mas sencilla:
router.post('/signup', isNotLogIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', isNotLogIn, (req, res) => {
    res.render('auth/signin');
});
//validar
router.post('/signin', isNotLogIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

router.get('/profile', isLoginIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});


module.exports = router;