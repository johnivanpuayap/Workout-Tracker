require('dotenv').config()

const express = require('express')

// express app
const app = express()

// middleware
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// routes
app.get('/', (request, response) => {
    response.json({message: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})