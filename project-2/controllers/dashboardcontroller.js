const Brand = require("../models/brandmodel")
const Category = require("../models/categorymodel")

dashboard = async (req,res)=>{
    totalbrand = 0
    totalcategory = 0

    await Brand.countDocuments().then(brandcount =>{
        totalbrand = brandcount
    })

    await Category.countDocuments().then(categorycount =>{
        totalcategory = categorycount
    })

    res.json({
        status:200,success:true,total_brands : totalbrand,total_categories : totalcategory
    })
}

module.exports = {
    dashboard    
}