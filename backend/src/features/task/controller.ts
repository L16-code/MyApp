import {Request,Response} from "express";
import CategoryService from "./service"
import { CustomRequest } from "../../middleware/authMiddleware";
export const getAllTask = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.getAllTask(user_id as string);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
};
export const createTask = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.createTask(req.body,user_id as string) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const ToggleTaskStatus = async (req:CustomRequest, res:Response) => {
    try {
        const result = await CategoryService.ToggleTaskStatus(req.params.id ) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const GetAllTaskByCategory = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.GetAllTaskByCategory(user_id as string,req.params.id) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const GetAllCompletedTask = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.GetAllCompletedTask(user_id as string) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const GetAllTodayTask = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.GetAllTodayTask(user_id as string) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const UpdateTask = async (req:CustomRequest, res:Response) => {
    try {
        const result = await CategoryService.UpdateTask(req.params.id,req.body) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}