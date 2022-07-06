require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const nftRoutes = require('./routes/nftRoutes')




const conectarDB = require('./db')
conectarDB()

// express app
const app = express()
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
//app.use('/api', nftRoutes)

//conext to db

        app.listen(process.env.PORT, () => {
            console.log('listening for request on port', process.env.PORT)
        })
   