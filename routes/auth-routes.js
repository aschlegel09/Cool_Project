var router = require('express').Router();
var passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

router.get('/logout', (req, res) => {
    // easy to logout using passport
    var name = req.user;
    console.log("LOGGING OUT " + req.user.username)
    req.logout();
    req.session.notice = "You have successfully been logged out " + name + "!";
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// cb for google to redirect to
// get profile information this way
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/');
});

module.exports = router;