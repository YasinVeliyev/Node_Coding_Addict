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

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        const {id, name,image} = product
        return {id, name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req, res)=>{
    console.log(req.params)
    const singleProduct = products.find((product)=>product.id==req.params.productId)
    console.log(singleProduct)
    res.json(singleProduct)
})

app.get('/api/products/:productId/:reviewId', (req, res)=>{
    console.log(req.params)
    res.json(req.params)
})
app.get("/api/v1/query", (req, res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (!sortedProducts.length){
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.all("*", (req, res) => {
    res.status(404).send('<h1>Reseource not found</h1>')
})



app.listen(5000, ()=>console.log('Server is running'))