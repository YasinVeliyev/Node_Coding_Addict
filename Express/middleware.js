const express = require('express')

app = express()
app.use((req, res, next)=>{
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
})

app.get('/', (req, res)=>{
    
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.listen(5000, ()=>console.log('Server is running'))