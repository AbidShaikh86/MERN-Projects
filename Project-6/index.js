const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const Assignment_6 = http.createServer((req, res) => {
    let {url, method} = req;
    const homeFile = path.join(__dirname, './src/home.html')
    const aboutFile = path.join(__dirname, './src/about.html')
    const contactFile = path.join(__dirname, './src/contact.html')

    if(url.toLowerCase() === "/" || url.toLowerCase() === "/home"){
        fs.readFile(homeFile, (err, data) => {
            if(err){
                res.writeHead(404, {"content-type":"text/html"})
                res.write("<h1>404 Not Found</h1>")
                res.end()
            }else{
                res.writeHead(200, {"content-type":"text/html"});
                res.write(data)
                res.end()
            }
        });
    }else if(url.toLowerCase() === "/about"){
        fs.readFile(aboutFile,(err, data) => {
            if(err){
                res.writeHead(404, {"content-type":"text/html"})
                res.write("<h1>404 Not Found</h1>")
                res.end()
            }else{
                res.writeHead(200, {"content-type" : "text/html"});
                res.write(data);
            }
        })
    }else if(url.toLowerCase() === '/contact'){
        fs.readFile(contactFile, (err, data) => {
            if(err){
                res.writeHead(404, {"content-type":"text/html"})
                res.write("<h1>404 Not Found</h1>")
                res.end()
            }else{
                res.writeHead(200,{"content-type": "text/html"})
                res.write(data)
                res.end()
            }
        })
    }else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>404 Not Found</h1>")
        res.end()
    }
});

Assignment_6.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
})