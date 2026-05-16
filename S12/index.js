import express, { json, urlencoded } from "express"

import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { getAllSmallSweets } from "./controllers/smallSweetsController.js"
import teaRouter from "./routers/teaRouter.js"
import { connectDB } from "./config/DBConnect.js"
import sweetsRouter from "./routers/sSweetsRouter.js"
import userRouter from "./routers/userRouter.js"

dotenv.config()

connectDB("teashop")

const PORT = process.env.PORT || 8080
const server = express()

server.use(urlencoded({extended: true}))
server.use(json())
server.use(cookieParser())
server.set('view engine', 'ejs');
server.use(express.static('public'))


server.get("/create-cookie", (req, res) => {
  res.cookie("newcookie", "Here is an example")
})

server.get("/", (req, res) => {
  res.render("index", {user: {username: "chouchane", email: "chouchane@gmail.com", tea: "Tea b ne3na3"}})
})
server.get("/about", (req, res) => {
  res.render("about")
})
server.get("/signup", (req, res) => {
  res.render("pages/signup")
})


// http://localhost:PORT/tea/  
server.use("/tea", teaRouter)

// http://localhost:PORT/s-sweets/
server.use("/s-sweets/", sweetsRouter)

// http://localhost:PORT/users/
server.use("/users", userRouter)

server.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  
})