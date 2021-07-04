const fs = require('fs')
const http = require('http')

const homePage = fs.readFileSync('./navbar-app/index.html')
const homeImage = fs.readFileSync('./navbar-app/logo.svg')
const homeStyles = fs.readFileSync('./navbar-app/style.css')
const homeLogic = fs.readFileSync('./navbar-app/index.js')

const server = http.createServer((req, res) => {
    const url = req.url
    if(url == '/'){
        res.writeHead(200, {'Content-Type':"text/html"})
        res.write(homePage)
        res.end()
    }
    else if(url == '/style.css'){
        res.writeHead(200, {'Content-Type':"text/css"})
        res.write(homeStyles)
        res.end()

    }

    else if(url == '/logo.svg'){
        res.writeHead(200, {'Content-Type':"image/svg+xml"})
        res.write(homeImage)
        res.end()

    }
    else if(url == '/index.js'){
        res.writeHead(200, {'Content-Type':"text/javascript"})
        res.end()

    }
})

server.listen(4000, ()=>console.log('Server is runnig'))



