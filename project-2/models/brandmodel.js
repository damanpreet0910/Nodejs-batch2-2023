const mongoose = require("mongoose")

const brandschema = new mongoose.Schema({
    brand_name : {type:String,default:null},
    description : {type:String,default:null},
    created_at : {type:Date,default:Date.now()},
    isblocked : { type:Boolean,default:false}
})

module.exports = new mongoose.model('brand',brandschema)