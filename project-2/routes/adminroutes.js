// console.log("Hello")
const router = require('express').Router()
const categorycontroller = require('../controllers/categorycontroller')
const brandcontroller = require('../controllers/brandcontroller')
const ordercontroller = require('../controllers/orderController')

router.post("/addcategory",categorycontroller.addcategory)
router.post("/getallcategory",categorycontroller.getallcategory)
router.post("/getsinglecategory",categorycontroller.getsingle)


router.post("/addbrand",brandcontroller.addbrand)

router.post("/placeorder",ordercontroller.add)
router.post("/getallorder",ordercontroller.getall)

module.exports = router