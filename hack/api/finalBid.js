var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.createConnection('mongodb://192.168.0.164/hgrabhouse');


var Schema = mongoose.Schema;
var finalBid = new Schema({
    userEmail: String,
    sellerUID: String,
    sellerEmail: String,
    bidderUID: String,
    bidderAmount: String

});

var FINALBID = mongoose.model('finalBid', finalBid);

router.post('/set', function (req, res) {
    var fbid = new FINALBID(req.body);
    fbid.save(function (error, data) {
        res.send(data);
    });
});

router.post('/getBySellerUID', function (req, res) {
    FINALBID.find({sellerUID: req.body.sellerUID}, function (error, data) {
        res.send(data);
    });
});

router.post('/getBySellerEmail', function (req, res) {
    FINALBID.find({sellerEmail: req.body.sellerEmail}, function (error, data) {
        res.send(data);
    });
});

module.exports = router;