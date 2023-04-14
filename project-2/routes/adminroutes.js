// console.log("Hello")
const router = require('express').Router()
const categorycontroller = require('../controllers/categorycontroller')

router.post("/addcategory",categorycontroller.addcategory)
router.post("/getallcategory",categorycontroller.getallcategory)


module.exports = router