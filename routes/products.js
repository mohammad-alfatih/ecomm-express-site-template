const express = require('express');
const router = express.Router();

const headerLinks = require('../mockData/header-links');
const footerLinks = require('../mockData/footer-links');
const products = require('../mockData/product-list');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const category = req.query.category;
  const list = products.list.filter(x => x.categories.includes(category));

  res.render('products', {
    title: 'Our latest products',
    headerLinks: headerLinks,
    footerLinks: footerLinks,
    products: list,
    render_ratings: products.render_ratings
  });
});

module.exports = router;
