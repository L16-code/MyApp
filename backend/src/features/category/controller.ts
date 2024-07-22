import {Request,Response} from "express";
import CategoryService from "./service"
import { CustomRequest } from "../../middleware/authMiddleware";
export const getAllCategory = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.getAllCategory(user_id as string);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
};
export const createCategory = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.createCategory(req.body,user_id as string) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const deleteCategory = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.deleteCategory(req.params.id ) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const updateCategory = async (req:CustomRequest, res:Response) => {
    try {
        const user_id=req.UserId
        const result = await CategoryService.updateCategory(req.body,req.params.id) 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}