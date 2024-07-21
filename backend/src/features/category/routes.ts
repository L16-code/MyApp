import  express from "express"
import { AddUser, userLogin } from "./controller"
const UserRouter=express.Router()
UserRouter.post('/add-user', AddUser)
UserRouter.post('/user-login', userLogin)
export default UserRouter