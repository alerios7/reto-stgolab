var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/user', function(req, res, next) {
    User.findOneAndUpdate(
        {email: req.body.email},
        {email: req.body.email, color: req.body.color, number: req.body.number},
        {runValidators: true, new: true, upsert: true},
        function(err, user) {
            if (err) {
                console.log(err);
                res.render('index', {
                    err: err,
                    status: "Error"
                });
            } else {
                console.log(user);
                res.render('user', {
                    status: "Valido!",
                    user: user
                });
            }
        }
    );
});

router.get('/user', function(req, res, next) {
    res.render('user');
});
module.exports = router;
