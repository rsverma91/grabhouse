var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.connect('mongodb://192.168.0.164/hgrabhouse');


var Schema = mongoose.Schema;
var userDetails = new Schema({
    name: String,
    email: String,
    pwd: String,
    mob: String,
    type: String
});

mongoose.model('userDetails', userDetails);
var UD = mongoose.model('userDetails');

router.post('/set', function (req, res) {
    var add_user = new UD(req.body);
    add_user.save(function (error, data) {
        res.send(data);
    });
});

router.post('/get', function (req, res) {
    UD.find({email: req.body.email, pwd: req.body.pwd, type: req.body.type}, function (error, data) {
        res.send(data[0]);
    });
});

module.exports = router;