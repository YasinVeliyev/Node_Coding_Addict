const express = require('express')

app = express()



app.get("/", (req, res)=>{
    console.log('User hit the reseource')
    res.send("Hompe Page")
})
app.all("*", (req, res)=>{
    res.status(404).send('<h1>Not Found</h1>')
})


app.listen(5000, ()=>console.log('Server is running'))