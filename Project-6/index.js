// this is a core modules for NodeJs server
// Variable for storing HyperText Transfer Protocol Protocol 
const http = require('http');

// Variable for storing Forward Secrecy Protocol for transfering html file in server
const fs = require('fs');

// this path module provides utilities for working with files
const path = require('path');

// storing our PORT number in Variable for better Understanding
const PORT = 3000;

// I created variable in that variable i refer http variable than i use createServer method for creating NodeJS server
const Assignment_6 = http.createServer((req, res) => {
    // extracting url from req parameter
    let {url} = req;

    // storing path directory of html file in variable 
    // this is not mandatory but for cleaner code
    const homeFile = path.join(__dirname, './src/home.html')
    const aboutFile = path.join(__dirname, './src/about.html')
    const contactFile = path.join(__dirname, './src/contact.html')

    // this if...else if chain is acting as a Router
    if(url.toLowerCase() === "/" || url.toLowerCase() === "/home"){
        // this is a Async method that uses to read entire file
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
        // toLowerCase is for safety purposes not mandatory to use
        // this for converting url request to lowercase
    }else if(url.toLowerCase() === "/about"){
        fs.readFile(aboutFile,(err, data) => {
            if(err){
                res.writeHead(404, {"content-type":"text/html"})
                res.write("<h1>404 Not Found</h1>")
                res.end()
            }else{
                res.writeHead(200, {"content-type" : "text/html"});
                res.write(data);
		res.end();
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

// listen method is use to start this web server
// this method taker Port as a Parameter and gives callback function for dev to show consoles 
Assignment_6.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
})