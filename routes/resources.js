var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var royalty_controller = require('../controllers/royalty'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/royaltys', royalty_controller.royalty_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/royaltys/:id', royalty_controller.royalty_delete); 
 
// PUT request to update Costume. 
router.put('/royaltys/:id', royalty_controller.royalty_update_put); 
 
// GET request for one Costume. 
router.get('/royaltys/:id', royalty_controller.royalty_detail); 
 
// GET request for list of all Costume items. 
router.get('/royaltys', royalty_controller.royalty_list); 
 
module.exports = router; 
 