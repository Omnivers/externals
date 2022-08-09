// Variables & Importing
const express=require('express')
const app=express()
const gameofthrones=require('./routes/gameofthrones')
const pokemon=require('./routes/pokemon')

app.get('/',(req,res)=>{ // main message
    res.send('Hello world ! this is an API fetching of Pokemon & Game of throne')
})

//Routes
app.use('/gameofthrones',gameofthrones)
app.use('/pokemon',pokemon)



// Server launching 
app.listen(5000,()=>{
    console.log(`Server start at port : ${5000}`)
})