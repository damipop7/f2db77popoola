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
exports.royalty_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Royalty.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle royalty create on POST. 
//exports.royalty_create_post = function(req, res) { 
//    res.send('NOT IMPLEMENTED: royalty create POST'); 
//}; 
 
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

// Handle royalty create on POST. 
exports.royalty_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Royalty(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.country = req.body.country; 
    document.wealth = req.body.wealth; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 