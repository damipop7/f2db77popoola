const mongoose = require("mongoose") 
const royaltySchema = mongoose.Schema({ 
    name: String, 
    country: String, 
    wealth: {
    type: Number,
    min: 1 ,
    max: 50
    }

}) 
 
module.exports = mongoose.model("royalty", royaltySchema) 