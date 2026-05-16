import { Router } from "express";
import { createUser, getUserByEmail, loginUser } from "../controllers/usersController.js";
import { displayPassword } from "../middlewares/userMiddlewares.js";

const userRouter = Router()

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)

export default userRouter