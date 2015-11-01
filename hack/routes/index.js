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
/* GET SignIn page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'HGrabHouse' });
});
/* GET SignUp page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'HGrabHouse' });
});
/* GET Add Property page. */
router.get('/addProperty', function(req, res, next) {
  res.render('addProperty', { title: 'HGrabHouse' });
});
/* GET Add Seller Default page. */
router.get('/sellerDefault', function(req, res, next) {
  res.render('sellerDefault', { title: 'HGrabHouse' });
});
/* GET Add Search Result page. */
router.get('/searchResult', function(req, res, next) {
  res.render('searchResult', { title: 'HGrabHouse' });
});
module.exports = router;
