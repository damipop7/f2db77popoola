var express = require('express');
const royalty_controlers= require('../controllers/royalty'); 
var router = express.Router();

/* GET home page. */
router.get('/', royalty_controlers.royalty_view_all_Page );

//GET requets for one controller 
router.get('/royalty/:id', royalty_controlers.royalty_detail);
module.exports = router;

/* GET detail royalty page */ 
router.get('/detail', royalty_controlers.royalty_view_one_Page); 
 
/* GET create royalty page */ 
router.get('/create', royalty_controlers.royalty_create_Page); 

/* GET create update page */ 
router.get('/update', royalty_controlers.royalty_update_Page); 

/* GET delete costume page */ 
router.get('/delete', royalty_controlers.royalty_delete_Page); 