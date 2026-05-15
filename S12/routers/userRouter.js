import { Router } from "express";
import { createUser, getUserByEmail } from "../controllers/usersController.js";
import { displayPassword } from "../middlewares/userMiddlewares.js";

const userRouter = Router()

userRouter.post("/create", createUser)
userRouter.post("/login", getUserByEmail)

export default userRouter