const express = require('express')

app = express()

app.get("/", (req, res)=>{
    res.send("Hompe Page")
})

app.listen(5000, ()=>console.log('Server is running'))