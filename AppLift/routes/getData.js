var express = require('express');
var request = require('request');
var router = express.Router();
var app = express();

router.get('/getData/:loc', function(req, res) {
    var loc = req.params.loc;
    request('http://192.168.2.39:8080/Applift/getLocationApi/'+ loc, function(error, response, body) {
        res.send(body)
    });
});


module.exports = router;