const mongooge = require("mongoose")

const categoryschema = new mongooge.Schema({
    category_name : { type:String,default:null },
    description : { type:String,default:null },
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('category',categoryschema)