const Category = require('../models/categorymodel')

function addcategory(req,res){

    var validation = ""
    if(req.body.category_name == "")
    {
        validation += "Category name is required \n"
    }
    if(req.body.description == "")
    {
        validation += "Description is required"
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

        let categoryobject = new Category()
        categoryobject.category_name = req.body.category_name
        categoryobject.description = req.body.description
        categoryobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'Category inserted',
            'data':req.body
        })
    }
    
}

getallcategory = (req,res)=>{
    Category.find(req.body).exec()
    .then(categorydata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':categorydata
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

getsingle = (req,res)=>{
    var validate = ""
    if(req.body._id == "")
    {
        validate += "_id is required"
    }

    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
        Category.findOne({_id:req.body._id})
        .then(categorydata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':categorydata
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
}

update = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.category_name == "")
    {
        validation += "Category name is required \n"
    }
    if(req.body.description == "")
    {
        validation += "Description is required"
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
        Category.findOne({_id:req.body._id})
        .then(categorydata=>{
            if(categorydata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                categorydata.category_name = req.body.category_name
                categorydata.description = req.body.description
                categorydata.save()

                res.json({
                    status:200,success:true,msg:'Record updated'
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

deletedata = (req,res)=>{
    var validation = ""
    if(req.body._id == "")
    {
        validation += "ID is required \n"
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
        Category.findOne({_id:req.body._id})
        .then(categorydata=>{
            if(categorydata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //Delete 
                Category.deleteOne({_id:req.body._id})
                .then(data=>{
                    res.json({
                        status:200,success:true,msg:'Record Deleted'
                    })
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
    addcategory,
    getallcategory,
    getsingle,
    update,
    deletedata
}