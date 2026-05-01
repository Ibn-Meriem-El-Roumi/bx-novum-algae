import express, { json, urlencoded } from "express"
// import { createStudent, deleteStudent, getAllStudents, getOneStudentById, updateStudent } from "./handlers.js"

import dotenv from "dotenv"
import { createTea, deleteTea, getAllTeas, getTeaById, updateTea } from "./controllers/teaController.js"
import { getAllSmallSweets } from "./controllers/smallSweetsController.js"

import { connectDB } from "./config/DBConnect.js"
dotenv.config()

connectDB("teashop")

const PORT = process.env.PORT || 8080
const server = express()

server.use(urlencoded({extended: true}))
server.use(json())

server.get("/tea/", getAllTeas)
server.get("/tea/:id", getTeaById)
server.post("/tea", createTea)
server.delete("/tea/:id", deleteTea)
server.put("/tea/:id", updateTea)

server.get("/s-sweets/", getAllSmallSweets)

server.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  
})