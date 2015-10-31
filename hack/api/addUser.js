var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// MongoDB setup
mongoose.connect('mongodb://localhost/hgrabhouse');


var Schema = mongoose.Schema;
var userDetails = new Schema({
    name: String,
    email: String,
    pwd: String,
    mob: String
});

mongoose.model('userDetails', userDetails);
var addUser = mongoose.model('userDetails');

router.post('/', function (req, res) {
    var adduser = new addUser(req.body);
    adduser.save(function (error, data) {
        res.send(data);
    });
});



module.exports = router;