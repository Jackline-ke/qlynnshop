// import express and cors
const express = require('express')
const cors = require('cors')

//the application
const app = express()
//middleware
app.use(express.json())
app.use(cors())

//send a request and a respond
app.get("/", (req, res) =>{
    res.send("Welcome to Qlynnshop")
})

app.listen(5000, console.log("Server is running in port 5000..."))

