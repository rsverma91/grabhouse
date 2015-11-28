var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'AppLift' });
});
router.get('/map', function(req, res, next) {
  res.render('common', { title: 'Map' });
});

module.exports = router;
