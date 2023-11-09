const express = require('express')
const{restart} = require('nodemon')
const app = express()


app.get('/',(req,res)=>{

    console.log('homepage')
    return res.send({message:'Hello world'})
})

app.listen(3000,()=>{
    console.log('app is running')
})