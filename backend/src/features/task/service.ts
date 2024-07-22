import { ITaskSchema } from "./interface";
import { TaskModel } from "./model";

const response: {
    message: string;
    data?: unknown;
    success: boolean;
} = { message: "", success: false };
class CategoryService {
    async getAllTask(user_id:string){
        const category = await TaskModel.find({user: user_id});
        response.success = true;
        response.message = "Category fetched successfully";
        response.data = category;
        return response;
    }
    async createTask(data:ITaskSchema,user_id:string){
        const {name, date, categoryId}=data;
        const newTask = new TaskModel({ 
            name, 
            user:user_id, 
            date,
            categoryId
        });
        const res = await newTask.save();
        if(res){
            response.success = true;
            response.message = "Task created successfully";
            response.data = {};
        }else{
            response.success = false;
            response.message = "Task not created";
            response.data = '';
        }
        return response;
    }
    async ToggleTaskStatus(id:string){
        const res = await TaskModel.findById(id);
        if(res && res.isCompleted==true){
            await TaskModel.findByIdAndUpdate(id,{isCompleted:false})
        }else{
            await TaskModel.findByIdAndUpdate(id,{isCompleted:true})
        }
        if(res){
            response.success = true;
            response.message = "task updated successfully";
            response.data = {};
        }else{
            response.success = false;
            response.message = "task not updated";
            response.data = '';
        }
        return response;
    }
    async GetAllTaskByCategory(id:string,categoryId:string){
        const category = await TaskModel.find({categoryId, user: id});
        if(category.length>0){
            response.success = true;
            response.message = "Task fetched successfully";
            response.data = category;
        }else{
            response.success = false;
            response.message = "Task not fetched";
            response.data = '';
        }
        
        return response;
    }
    async GetAllCompletedTask(id:string){
        const category = await TaskModel.find({user: id, isCompleted:true});
        if(category.length>0){
            response.success = true;
            response.message = "Task fetched successfully";
            response.data = category;
        }else{
            response.success = false;
            response.message = "Task not fetched";
            response.data = '';
        }
        return response;
    }
    async GetAllTodayTask(id:string){
        const today = new Date();
        today.setHours(0,0,0,0);
        // console.log(today);
        const category = await TaskModel.find({user: id, date: today, isCompleted: false});
        if(category.length>0){
            response.success = true;
            response.message = "Task fetched successfully";
            response.data = category;
        }else{
            response.success = false;
            response.message = "Task not fetched";
            response.data = '';
        }
        return response;
    }
    async UpdateTask(id:string, data:ITaskSchema){
        const {name, date, categoryId}=data;
        const res = await TaskModel.findByIdAndUpdate(id,{name, date, categoryId});
        if(res){
            response.success = true;
            response.message = "Task updated successfully";
            response.data = {};
        }else{
            response.success = false;
            response.message = "Task not updated";
            response.data = '';
        }
        return response;
    }
}
export default new CategoryService