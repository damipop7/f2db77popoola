const mongoose = require("mongoose") 
const royaltySchema = mongoose.Schema({ 
    name: String, 
    country: String, 
    wealth: Number 
}) 
 
module.exports = mongoose.model("royalty", 
royaltySchema) 