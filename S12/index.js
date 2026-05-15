import express, { json, urlencoded } from "express"

import dotenv from "dotenv"
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

// http://localhost:PORT/tea/  
server.use("/tea", teaRouter)

// http://localhost:PORT/s-sweets/
server.use("/s-sweets/", sweetsRouter)

// http://localhost:PORT/users/
server.use("/users", userRouter)

server.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  
})