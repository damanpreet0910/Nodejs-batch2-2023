function addcategory(req,res){
    res.json({
        'status':200,
        'success':true,
        'msg':'Category inserted',
        'data':req.body
    })
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