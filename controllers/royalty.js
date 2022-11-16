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
 
// Handle royalty delete form on DELETE. 
exports.royalty_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Royalty.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle royalty update form on PUT. 
exports.royalty_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Royalty.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name) toUpdate.name = req.body.name; 
        if(req.body.country) toUpdate.country = req.body.country; 
        if(req.body.wealth) toUpdate.wealth = req.body.wealth; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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

 // Handle a show one view with id specified by query 
 exports.royalty_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Royalty.findById( req.query.id) 
        res.render('royaltydetail',  
{ title: 'Royalty Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.royalty_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('royaltycreate', { title: 'Royalty Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.royalty_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Royalty.findById(req.query.id) 
        res.render('royaltyupdate', { title: 'Royalty Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.royalty_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Royalty.findById(req.query.id) 
        res.render('royaltydelete', { title: 'Royalty Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 