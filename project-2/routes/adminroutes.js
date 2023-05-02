// console.log("Hello")
const router = require('express').Router()
const categorycontroller = require('../controllers/categorycontroller')
const brandcontroller = require('../controllers/brandcontroller')
const ordercontroller = require('../controllers/orderController')
const usercontroller = require('../controllers/usercontroller')
const dashboardcontroller = require('../controllers/dashboardcontroller')

router.post("/register",usercontroller.register)
router.post("/login",usercontroller.login)


router.use(require('../config/middleware'))

router.post("/dashboard",dashboardcontroller.dashboard)
router.post("/changepassword",usercontroller.changepassword)

//category routes start
router.post("/addcategory",categorycontroller.addcategory)
router.post("/getallcategory",categorycontroller.getallcategory)
router.post("/getsinglecategory",categorycontroller.getsingle)
router.post("/updatecategory",categorycontroller.update)
router.post("/deletecategory",categorycontroller.deletedata)
//category routes end

//brand routes start
router.post("/addbrand",brandcontroller.addbrand)
router.post("/getallbrand",brandcontroller.getallbrand)
router.post("/enabledisablebrand",brandcontroller.enabledisablebrand)


router.post("/placeorder",ordercontroller.add)
router.post("/getallorder",ordercontroller.getall)



module.exports = router