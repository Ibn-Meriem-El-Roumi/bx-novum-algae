import express, { json, urlencoded } from "express"
// import { createStudent, deleteStudent, getAllStudents, getOneStudentById, updateStudent } from "./handlers.js"

import dotenv from "dotenv"
import { createTea, deleteTea, getAllTeas, getTeaById, updateTea } from "./teaHandler.js"
dotenv.config()

const PORT = process.env.PORT || 8080
const server = express()

server.use(urlencoded({extended: true}))
server.use(json())

server.get("/tea/", getAllTeas)
server.get("/tea/:id", getTeaById)
server.post("/tea/", createTea)
server.delete("/tea/:id", deleteTea)
server.put("/tea/:id", updateTea)

server.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  
})