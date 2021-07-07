const express = require('express');
const auth = require('./authorize');
const logger = require('./logger')

app = express()

app.use([auth, logger])

app.get('/', (req, res)=>{
    
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.listen(5000, ()=>console.log('Server is running'))