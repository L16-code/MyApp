import  express from "express"
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "./controller"
import { verifyToken } from "../../middleware/authMiddleware"
const CategoryRouter=express.Router()
CategoryRouter.get('/get-all-category',verifyToken, getAllCategory)
CategoryRouter.get('/get-category/:id',verifyToken, getCategoryById)
CategoryRouter.post('/create-category',verifyToken, createCategory)
CategoryRouter.delete('/delete-category/:id',verifyToken, deleteCategory)
CategoryRouter.put('/update-category/:id',verifyToken, updateCategory)

export default CategoryRouter