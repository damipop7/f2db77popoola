var express = require('express');
const royalty_controlers= require('../controllers/royalty'); 
var router = express.Router();

/* GET home page. */
router.get('/', royalty_controlers.royalty_view_all_Page );

//GET requets for one controller 
router.get('/royalty/:id', royalty_controlers.royalty_detail);
module.exports = router;
