var express = require('express');
const royalty_controlers= require('../controllers/royalty'); 
var router = express.Router();

/* GET home page. */
router.get('/', royalty_controlers.royalty_view_all_Page );

module.exports = router;
