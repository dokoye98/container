const express = require('express')
const{restart} = require('nodemon')
const app = express()


app.get('/',(req,res)=>{

    console.log('homepage')
     res.send('Hello world I am your leader')
})

app.listen(3000,()=>{
    console.log('app is running')
})