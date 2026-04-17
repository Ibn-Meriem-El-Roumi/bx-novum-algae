// const {createServer} = require("http")

import http from "http"
import fs from "node:fs"
import dotenv from "dotenv"
dotenv.config()


const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) =>{
    fs.readFile("indez.html", (error, data) =>{
        if(error){
            console.log("Something is wrong");
            response.writeHead(404, {message: "File not found"})
            response.end()
        }
        response.writeHead(200, {message: "Wrkd fine"}, {"content-type": "text/html"})
        response.end(data)
    })
})

server.listen(PORT, () =>{
    console.log("listening from http://localhost:"+PORT);
})