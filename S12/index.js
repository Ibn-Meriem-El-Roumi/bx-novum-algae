import express, { json, urlencoded } from "express"

import dotenv from "dotenv"
import { getAllSmallSweets } from "./controllers/smallSweetsController.js"
import teaRouter from "./routers/teaRouter.js"
import { connectDB } from "./config/DBConnect.js"
dotenv.config()

connectDB("teashop")

const PORT = process.env.PORT || 8080
const server = express()

server.use(urlencoded({extended: true}))
server.use(json())

// http://localhost:PORT/tea/  
server.use("/tea", teaRouter)

server.get("/s-sweets/", getAllSmallSweets)

server.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
  
})