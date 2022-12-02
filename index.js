require('dotenv').config()
const express = require('express')
const nocache = require('nocache')
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const path = require('path')
const create_api  = require('./Backend/Kod/api.js')
const { fail } = require('assert')
const { json } = require('express')
const { parse } = require('path')
const root = path.dirname(require.main.filename,'Front')


const port = process.env.FRONTEND_PORT || 3000 // port used to run server
const app = express()



//const oneDay = 1000 * 60 * 60 * 24;
// const time_expired = 1000 * 60 * 60 * 8;
// app.use(sessions({
//     secret: "NSI_SECRET",
//     saveUninitialized: true,
//     cookie: { maxAge: time_expired },
//     resave: false
// }));
app.use(cookieParser());
app.use(express.static('Front/html/login'))

// app.post('/login',(request,response) =>{
//     const {username} = request.body
//     console.log(username) 
//     if(!username)
//     {
//         return response.status(400).send({status: 'failed'})
//     }
//     return response.status(200).send({status: 'recieved'})
// })


// cookie parser middleware
// app.use(cookieParser());
// app.use(express.static(root + "\\Front\\html\\page\\page.html"));
// app.use(express.static(root));

// app.use(express.static(path.join(__dirname, '/')));
// create_api.test_api(app)



app.listen(port, () => {
    console.log(`Front running on port ${port}.`)
})