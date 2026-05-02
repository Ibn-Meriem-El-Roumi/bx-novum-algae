import { Router } from "express"
import { createTea, deleteTea, getAllTeas, getTeaById, updateTea, updateTeaPrice } from "../controllers/teaController.js"

const teaRouter = Router()

// http://localhost:PORT/tea/oussama   GET
// id = oussama
teaRouter.get("/", getAllTeas)
teaRouter.get("/:id", getTeaById)
teaRouter.post("/create", createTea)
teaRouter.delete("/:id", deleteTea)
teaRouter.put("/:id", updateTea)
teaRouter.put("/:id/price", updateTeaPrice)

export default teaRouter