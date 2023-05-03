const express = require('express')
const app = express()
const port = 3000
const config = require('./config/db')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
const adminroutes = require('./routes/adminroutes')
app.use("/admin",adminroutes)

const seeder = require('./config/seeder')
seeder.adminseeder()

app.listen(port,()=>{
    console.log("server runningat port "+port)
})