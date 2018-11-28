var router = require('express').Router();

var authCheck = (req, res, next) => {
    if (!req.user) {

        res.redirect('/auth/login');
    } else {
        // if logged in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    // res.send('you are logged in');
    res.render('./profile', { user: req.user });
});

module.exports = router;