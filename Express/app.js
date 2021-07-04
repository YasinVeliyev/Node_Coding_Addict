const express = require('express')
const path = require('path')
const {products} = require('./data')


app = express()

//setup static and middleware
app.use(express.static('./public'))
// app.use(express.static('./content'))
app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, './content/index.html'))
})

app.get('/api/', (req, res)=>{
    res.json(products)
})

app.all("*", (req, res) => {
    res.status(404).send('Reseource not found')
})

app.listen(5000, ()=>console.log('Server is running'))