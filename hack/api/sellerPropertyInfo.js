var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.createConnection('mongodb://192.168.0.164/hgrabhouse');


var Schema = mongoose.Schema;
var sellerPropertyInfo = new Schema({
    email: String,
    ohTYpe: String,
    purchaseType: String,
    propertyType: String,
    houseType: String,
    areaInFt: String,
    location: String,
    bidStartFare: String,
    bidDate: String,
    bidStartTime: String,
    bidEndTime: String,

    facilitys: {
    	balcony: String,
    	parking: String
    }
});

var SPI = mongoose.model('sellerPropertyInfo', sellerPropertyInfo);
//mongoose.model('sellerPropertyInfo', sellerPropertyInfo);

router.post('/set', function (req, res) {
    var seller_property_info = new SPI(req.body);
    seller_property_info.save(function (error, data) {
        res.send(data);
    });
});

router.post('/getByEmail', function (req, res) {
    SPI.find({email: req.body.email}, function (error, data) {
        res.send(data[0]);
    });
});

router.post('/getLocation', function (req, res) {
    SPI.find({location: new RegExp(req.body.location, "i")}, 'location', function (error, data) {
        res.send(data);
    });
});

router.post('/getAllByLocation', function (req, res) {
    SPI.find({location: new RegExp(req.body.location, "i")}, function (error, data) {
        res.send(data);
    });
});

router.post('/getByLocPurType', function (req, res) {
    SPI.find({location: (new RegExp(req.body.location, "i")), purchaseType: req.body.purchaseType}, function (error, data) {
        res.send(data);
    });
});

module.exports = router;