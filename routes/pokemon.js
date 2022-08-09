// Const for importing 
const express=require('express')
const axios=require('axios')
const app=express()

app.get('/',async (req,res)=>{ // Get all the pokemons
    const response=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`) // 151 pokemons
    res.json(response.data.results) // results to specify what we want from the API
})
app.get('/:id', async(req,res)=>{
    const {id}=req.params
    try { //incase the pokemon is valaible for the fetch
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        res.json(response.data)
      } catch (error) { //incase the parms is > than 13043
        res.status(error.response.status).send(error.response.statusText)
      }
})

module.exports=app