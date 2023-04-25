const mongooge = require("mongoose")

const orderschema = new mongooge.Schema({
    orderId : { type:String,default:null },
    userId : { type:String,default:null },
    categoryId : { type:mongooge.SchemaTypes.ObjectId,ref:'category',default:null },
    product_name : { type:String,default:null },
    price_per_item : { type:Number,default:0 },
    quantity : { type:Number,default:0 },
    sub_total : { type:Number,default:0 },
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('order',orderschema)