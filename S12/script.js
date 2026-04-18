// const {createServer} = require("http")
import http from "http"
import fs from "node:fs"
import dotenv from "dotenv"
import { log } from "node:console"
dotenv.config()

import {
    createStudent,
    getAllStudents,
    getOneStudentById,
    updateStudent,
    deleteStudent
} from "./handlers.js"


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
        response.writeHead(202, {message: "Wrkd fine"}, {"content-type": "text/html"})
        // response.end()
        response.end(data)
    })
}


const server = http.createServer((request, response) =>{
    console.log(request.method);
    const regex = /\d+/
    switch(request.method){
        case "GET":
            if(regex.test(request.url)) getOneStudentById(request.url.match(regex)[0])
            else getAllStudents()
            response.writeHead(200)
            response.end("Request Done")
            break
        case "POST":
            createStudent({id: 1, name: "Louai"})
            response.writeHead(201)    
            response.end("Request Done")
            break
        case "PATCH", "PUT":
            updateStudent(request.url.match(regex)[0], {name:"Titi"})
            response.writeHead(200)    
            response.end("Request Done")
            break
        case "DELETE":
            deleteStudent(request.url.match(regex)[0])
            response.writeHead(204)    
            response.end("Request Done")
        
        default:
            response.writeHead(500, {message: "Nothing here"})
            response.end()
    }

    // switch(request.url){
    //     case "/":
    //         serveHTMLPage(request.url, response)
    //         break
    //     case "/oussama":
    //         serveHTMLPage(request.url, response)
    //         break
    //     case "/nour":
    //         serveHTMLPage(request.url, response)
    //         break
    //     case "/soumeya":
    //         serveHTMLPage(request.url, response)
    //         break
    //     case "/racim":
    //         serveHTMLPage(request.url, response)
    //         break
    //     default:
    //         serveHTMLPage("/notfound", response)
    // }
})


server.listen(PORT, () =>{
    console.log("listening from http://localhost:"+PORT);
})