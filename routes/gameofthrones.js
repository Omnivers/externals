const express=require('express')
const app=express()
const axios=require('axios')
const characters=require('../gameofthrones.json')

app.get('/json',(req,res)=>{
    res.json(characters)
})

app.get('/url', async (req, res) => {
    const response = await axios.get('https://thronesapi.com/api/v2/Characters')
    res.json(response.data)
  })


module.exports=app