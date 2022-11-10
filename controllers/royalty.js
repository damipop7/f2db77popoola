var Royalty = require('../models/royalty'); 
 
// List of all royalty  
exports.royalty_list = async function(req, res) { 
    try{ 
        theRoyaltys = await Royalty.find(); 
        res.send(theRoyaltys); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific royalty. 
exports.royalty_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: royalty detail: ' + req.params.id); 
}; 
 
// Handle royalty create on POST. 
exports.royalty_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: royalty create POST'); 
}; 
 
// Handle royalty delete form on DELETE. 
exports.royalty_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: royalty delete DELETE ' + req.params.id); 
}; 
 
// Handle royalty update form on PUT. 
exports.royalty_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: royalty update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.royalty_view_all_Page = async function(req, res) { 
    try{ 
        theRoyaltys = await Royalty.find(); 
        res.render('Royalty', { title: 'Royalty Search Results', results: theRoyaltys }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 