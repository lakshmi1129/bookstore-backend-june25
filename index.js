// import dotenv file
 require('dotenv').config() // load env file


// import express library
const express = require('express')
// import cors
const cors = require("cors")
// import route
const route = require('./routes')
const appMiddleware = require('./middleware/appMiddleware')
// import db connection file
require('./databaseConnection')



// create the server - express()
const bookstoreServer = express()


// server using cors
bookstoreServer.use(cors())
bookstoreServer.use(express.json()) // parse json-middleware
// bookstoreServer.use(appMiddleware)
bookstoreServer.use(route)

// export the uploads folder from the server side
bookstoreServer.use('/upload',express.static("./uploads"))

// create PORT
PORT = 4000 || process.env.PORT

bookstoreServer.listen(PORT,()=>{
    console.log(`Server running successfully at port ${PORT}`);
    
})

bookstoreServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Server Started!!</h1>`)
})
