const express= require('express')
const app= express()
const port= 8000
app.use(express.urlencoded({extended:true}))
require('./config/db')
app.post("/",(req,res)=>{
    res.send('hello  user')
    
 })
 
 app.use("/expense",require('./routes/userroutes'))
 
 
 
 app.post("*",(req,res)=>{
     res.send('ERROR 404')
  })




app.listen(port,()=>{

    console.log("listening",port)
})