// console.log("Hello")
const router = require('express').Router()
const categorycontroller = require('../controllers/categorycontroller')
const brandcontroller = require('../controllers/brandcontroller')

router.post("/addcategory",categorycontroller.addcategory)
router.post("/getallcategory",categorycontroller.getallcategory)
router.post("/getsinglecategory",categorycontroller.getsingle)


router.post("/addbrand",brandcontroller.addbrand)

module.exports = router