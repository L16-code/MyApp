import {Request,Response} from "express";
import UserService from "./service"
export const AddUser = async (req:Request, res:Response) => {
    try {
        const result = await UserService.AddUser(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
};
export const userLogin = async (req:Request, res:Response) => {
    try {
        const result = await UserService.userLogin(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}