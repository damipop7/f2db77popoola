var express = require('express');
const royalty_controlers= require('../controllers/royalty'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on or redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
    } 

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
router.get('/update', secured, royalty_controlers.royalty_update_Page); 
 
/* GET delete costume page */ 
router.get('/delete', royalty_controlers.royalty_delete_Page); 