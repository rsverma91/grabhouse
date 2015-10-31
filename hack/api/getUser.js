var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.createConnection('mongodb://192.168.0.164/hgrabhouse');


var Schema = mongoose.Schema;
var userDetails = new Schema({
    name: String,
    email: String,
    pwd: String,
    mob: String,
    type: String
});

var getUser = mongoose.model('userDetails');

router.post('/', function (req, res) {
    getUser.find({email: req.body.email, pwd: req.body.pwd, type: req.body.type}, function (error, data) {
        res.send(data[0]);
    });
});



module.exports = router;