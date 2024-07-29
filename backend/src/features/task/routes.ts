import  express from "express"
import {  createTask,  DeleteTask,  GetAllCompletedTask,  getAllTask,  GetAllTaskByCategory,  GetAllTodayTask,  ToggleTaskStatus, UpdateTask } from "./controller"
import { verifyToken } from "../../middleware/authMiddleware"
const TaskRouter=express.Router()
TaskRouter.get('/get-all-task',verifyToken,getAllTask )
TaskRouter.post('/create-task',verifyToken, createTask)
TaskRouter.put('/toggle-task-status/:id',verifyToken, ToggleTaskStatus)
TaskRouter.get('/get-all-TaskByCategory/:id',verifyToken, GetAllTaskByCategory)
TaskRouter.get('/get-all-CompletedTask',verifyToken, GetAllCompletedTask)
TaskRouter.get('/get-all-TodayTask',verifyToken, GetAllTodayTask)
TaskRouter.put('/update-task/:id',verifyToken, UpdateTask)
TaskRouter.delete('/delete/:id',verifyToken, DeleteTask)

export default TaskRouter