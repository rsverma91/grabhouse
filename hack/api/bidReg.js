var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.createConnection('mongodb://192.168.0.164/hgrabhouse');


var Schema = mongoose.Schema;
var bidReg = new Schema({
    userEmail: String,
    sellerUID: String,
    sellerEmail: String,
    expire: String,
    expiryTime: String

});

var BIDREG = mongoose.model('bidReg', bidReg);

router.post('/set', function (req, res) {
    var breg = new BIDREG(req.body);
    breg.save(function (error, data) {
        res.send(data);
    });
});

router.post('/getByUniqueId', function (req, res) {
    BIDREG.find({_id: req.body.id}, function (error, data) {
    	if((new Date(data[0].expiryTime)/1000) > (new Date())/1000){
        	res.send(data[0]);
    	}
    	else{
    		res.send({status: false});
    	}
    });
});

router.post('/getBySellerEmail', function (req, res) {
    BIDREG.find({sellerEmail: req.body.sellerEmail}, function (error, data) {
        res.send(data);
    });
});

module.exports = router;