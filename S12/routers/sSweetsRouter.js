import { Router } from "express";
import { createOneSmallSweet, getAllSmallSweets } from "../controllers/smallSweetsController.js";
import { changePrice } from "../middlewares/swetsMiddleware.js";

const sweetsRouter = Router()

sweetsRouter.get("/", getAllSmallSweets)
sweetsRouter.post("/create",changePrice, createOneSmallSweet)


export default sweetsRouter