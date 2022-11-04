var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Royalty', { title: 'Search Results Royalty' });
});

module.exports = router;
