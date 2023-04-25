const Order = require('../models/ordermodel')

add = (req,res)=>{
    validation = ""
    if(req.body.orderId == "")
        validation += " Order Id is Required"
    if(req.body.categoryId == "")
        validation += " categoryId is Required"
    if(req.body.userId == "")
        validation += " user Id  is Required"
    if(req.body.product_name == "")
        validation += " product_name is Required"
    if(req.body.price_per_item == "")
        validation += " price_per_item is Required"
    if(req.body.quantity == "")
        validation += " quantity is Required"

    if(!!validation)
    {
        res.json({
            status:409,success:false,msg:validation
        })
    }
    else{
        //insert
        let orderobject = new Order()
        orderobject.orderId = req.body.orderId
        orderobject.userId = req.body.userId
        orderobject.categoryId = req.body.categoryId
        orderobject.product_name = req.body.product_name
        orderobject.price_per_item = req.body.price_per_item
        orderobject.quantity = req.body.quantity
        orderobject.sub_total = (req.body.quantity)*(req.body.price_per_item)
        orderobject.save()

        res.json({
            success:true,status:200,msg:'ORder Placed'
        })
    }
}

getall = (req,res)=>{
    
    Order.find(req.body)
    .populate('categoryId')
    .then(orderdata=>{
        res.json({
            status:200,
            success:true,
            msg:'data loaded',
            data:orderdata
        })
    })
    .catch(err=>{
        res.json({
            status:500,success:false,msg:'Error',error:String(err)
        })
    })
}

module.exports = {
    add,
    getall
}