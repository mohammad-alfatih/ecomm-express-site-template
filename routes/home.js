var express = require('express');
var router = express.Router();

var headerLinks = require('../mockData/header-links');
var footerLinks = require('../mockData/footer-links');
var heroText = require('../mockData/hero-text');
var products = require('../mockData/product-list');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Homepage',
    headerLinks: headerLinks,
    footerLinks: footerLinks,
    heroText: heroText,
    products: products
  });
});

module.exports = router;
