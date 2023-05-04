// console.log("Hello")
const router = require('express').Router()
const categorycontroller = require('../controllers/categorycontroller')
const brandcontroller = require('../controllers/brandcontroller')
const ordercontroller = require('../controllers/orderController')
const usercontroller = require('../controllers/usercontroller')
const dashboardcontroller = require('../controllers/dashboardcontroller')
const multer = require('multer')

const brandstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/brand')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const brandupload = multer({ storage: brandstorage })

router.post("/register",usercontroller.register)
router.post("/login",usercontroller.login)


// router.use(require('../config/middleware'))

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
router.post("/addbrand",brandupload.single('brand_logo'),brandcontroller.addbrand)
router.post("/getallbrand",brandcontroller.getallbrand)
router.post("/enabledisablebrand",brandcontroller.enabledisablebrand)


router.post("/placeorder",ordercontroller.add)
router.post("/getallorder",ordercontroller.getall)



module.exports = router