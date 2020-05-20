const express = require('express');
const router = express.Router();

const headerLinks = require('../mockData/header-links');
const footerLinks = require('../mockData/footer-links');
const heroText = require('../mockData/hero-text');
const products = require('../mockData/product-list');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Homepage',
    headerLinks: headerLinks,
    footerLinks: footerLinks,
    heroText: heroText,
    products: products.list,
    render_ratings: products.render_ratings
  });
});

module.exports = router;
