// const {createServer} = require("http")

import http from "http"
import fs from "node:fs"
import dotenv from "dotenv"
import { log } from "node:console"
dotenv.config()


const PORT = process.env.PORT || 3000

function serveHTMLPage(pageURL, response){
    let pageName = pageURL.substring(1)
    if(pageURL === "/") pageName = "index"
    fs.readFile(`${pageName}.html`, (error, data) =>{
        if(error){
            console.log("Something is wrong");
            // fs.readFile("not-found.html", (data) => {
            //     response.writeHead(404, {message: "File not found"})
            //     response.end(data)
            // })
            // return
        }
        response.writeHead(200, {message: "Wrkd fine"}, {"content-type": "text/html"})
        response.end(data)
    })
}


const server = http.createServer((request, response) =>{
    console.log(request.method);
    
    switch(request.url){
        case "/":
            serveHTMLPage(request.url, response)
            break
        case "/oussama":
            serveHTMLPage(request.url, response)
            break
        case "/nour":
            serveHTMLPage(request.url, response)
            break
        case "/soumeya":
            serveHTMLPage(request.url, response)
            break
        case "/racim":
            serveHTMLPage(request.url, response)
            break
        default:
            serveHTMLPage("/notfound", response)
    }
})

server.listen(PORT, () =>{
    console.log("listening from http://localhost:"+PORT);
})