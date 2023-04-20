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

module.exports = {
    addbrand
}