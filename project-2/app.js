const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))
const adminroutes = require('./routes/adminroutes')
app.use("/admin",adminroutes)

app.listen(port,()=>{
    console.log("server runningat port "+port)
})