const express = require('express');
const router = express.Router();

const headerLinks = require('../mockData/header-links');
const footerLinks = require('../mockData/footer-links');
const products = require('../mockData/product-list');
const details = require('../mockData/product-details');
const render_ratings = require('../functions/render-ratings');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const name = req.query.name;
  const item = products.list.filter(x => x.name == name)[0];
  const detail = details.details_list.filter(x => x.name == name)[0];

  res.render('item', {
    title: item.label,
    headerLinks: headerLinks,
    footerLinks: footerLinks,
    item: item,
    details: detail,
    render_ratings: render_ratings
  });
});

module.exports = router;
