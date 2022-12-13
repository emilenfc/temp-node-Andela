const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
     res.end('welcome to home page')   
    }
    if(req.ul ==="/about"){
        res.end("Her is our short history")
    }
    res.end(`
    <h1>Ooops</h1>
    <p>We can't seem to find the page youare looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)