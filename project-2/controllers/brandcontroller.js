const Brand = require('../models/brandmodel')

addbrand = (req,res)=>{
    var validate = ""
    if(req.body.brand_name == "")
    {
        validate += " brand name is required \n"
    }
    if(req.body.description == "")
    {
        validate += "Description is required \n"
    }


    //check validator
    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
        //check duplicacy
        Brand.findOne({brand_name:req.body.brand_name})
        .then(branddata=>{
            // console.log(branddata)
            if(branddata == null)
            {
                //insert
                let brandobject = new Brand()
                brandobject.brand_name = req.body.brand_name
                brandobject.description = req.body.description
                brandobject.save()
                res.json({
                    success:true,
                    status:200,
                    msg:'Brand inserted'
                })
            }
            else{
                res.json({
                    status:409,
                    success:false,
                    msg:'Brand already exists'
                })
            }
        })
    }
}

getallbrand = (req,res)=>{

    limit_num = 3
    skip_count = 0
    if(req.body.pageno > 1)
    {
        skip_count = (req.body.pageno - 1)*limit_num
        // console.log("Page found")
    }

    // console.log(skip_count)

    Brand.find()
    // .sort({_id:-1})
    .skip(skip_count)
    .limit(limit_num)
    .exec()
    .then(branddata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':branddata
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg : 'Error Occur',
            error : String(err)
        })
    })
    
}

enabledisablebrand = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.isblocked == "")
    {
        validation += "Status is required \n"
    }

    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        //check whether data exists or not wrt particular id
        Brand.findOne({_id:req.body._id})
        .then(branddata=>{
            if(branddata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //enable disable brand 
                branddata.isblocked = req.body.isblocked
                branddata.save()

                res.json({
                    status:200,success:true,msg:'Record status changed'
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'Error',
                error:String(err)
            })
        }) 
    }
}

module.exports = {
    addbrand,
    getallbrand,
    enabledisablebrand
}