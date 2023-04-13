const express = require('express')
const app = express()
const port = 5000

app.use(express.urlencoded({'extended':true}))

app.get("/",function(req,res){
    // console.log("My first api works")
    res.json({
        'status':200,
        'success':true,
        'msg':'My First API works-'
    })
})

app.get("/home",(req,res)=>{
    res.json({
        'status':200,
        'success':true,
        'msg':'Home Page working'
    })
})

app.post("/addcategory",(req,res)=>{
    console.log(req.body)
    res.json({
        'status':200,
        'success':true,
        'msg':'category inserted',
        'data':req.body
    })
})

app.all("*",(req,res)=>{
    res.json({
        'status':404,
        'success':false,
        'msg':'route Not Found'
    })
})

app.listen(port,()=>{
    console.log("server running at "+port)
})