var express = require('express');
var router = express.Router();
var rand = Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num = Math.tan(rand)
  res.send('Math.tan() applied to ' + rand + ' is ' + num);
});

module.exports = router;
