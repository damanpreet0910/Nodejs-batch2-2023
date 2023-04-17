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
    category_array = [
        {
            'category_name':'category 1',
            'description' : 'Demo description'
        },
        {
            'category_name':'category 2',
            'description' : 'Demo description 2'
        },
        {
            'category_name':'category 3',
            'description' : 'Demo description 3'
        }

    ]
    res.json({
        'status':200,
        'success':true,
        'msg':'Category inserted',
        'data':category_array
    })
}


module.exports = {
    addcategory,
    getallcategory
}