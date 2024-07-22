import  express from "express"
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "./controller"
import { verifyToken } from "../../middleware/authMiddleware"
const CategoryRouter=express.Router()
CategoryRouter.get('/get-all-category',verifyToken, getAllCategory)
CategoryRouter.post('/create-category',verifyToken, createCategory)
CategoryRouter.delete('/delete-category/:id',verifyToken, deleteCategory)
CategoryRouter.put('/update-category/:id',verifyToken, updateCategory)

export default CategoryRouter