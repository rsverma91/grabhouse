var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HGrabHouse' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'HGrabHouse' });
});
module.exports = router;
