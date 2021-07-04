const express = require('express')
const path = require('path')
app = express()

//setup static and middleware
app.use(express.static('./public'))

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, './content/index.html'))
})

app.all("*", (req, res) => {
    res.status(404).send('Reseource not found')
})

app.listen(5000, ()=>console.log('Server is running'))