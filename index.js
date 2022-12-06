require('dotenv').config()
const express = require('express')
const path = require('path')
const create_api  = require('./Backend/Kod/api.js')
const cookieParser = require("cookie-parser")

const port = process.env.FRONTEND_PORT || 3000 
const app = express()

app.use(cookieParser());
app.use(express.static('Front/html/login'))

app.listen(port, () => {
    console.log(`Front running on port ${port}.`)
})