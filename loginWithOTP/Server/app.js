require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors");
require("./db/conn.js")

const PORT = 4002;

// middleware
app.use(express.json());
app.use(cors());

// gET dATA

app.get("/", (req,res)=>{
    res.status(200).json("server start")
})

app.listen(PORT, ()=>{
    console.log(`Server Start at PORT No : ${PORT}`)
})