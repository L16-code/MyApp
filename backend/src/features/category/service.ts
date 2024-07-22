import { Icategory } from "./interface";
import { CategoryModel } from "./model";

const response: {
    message: string;
    data?: unknown;
    success: boolean;
} = { message: "", success: false };
class CategoryService {
    async getAllCategory(user_id:string){
        const category = await CategoryModel.find({user: user_id});
        response.success = true;
        response.message = "Category fetched successfully";
        response.data = category;
        return response;
    }
    async createCategory(data:Icategory,user_id:string){
        const {color,icon, isEditable, name}=data;
        const newCategory = new CategoryModel({color,icon, isEditable, name, user:user_id});
        const res = await newCategory.save();
        if(res){
            response.success = true;
            response.message = "Category created successfully";
            response.data = {};
        }else{
            response.success = false;
            response.message = "Category not created";
            response.data = '';
        }
        return response;
    }
    async deleteCategory(id:string){
        const res = await CategoryModel.findByIdAndDelete(id);
        if(res){
            response.success = true;
            response.message = "Category deleted successfully";
            response.data = {};
        }else{
            response.success = false;
            response.message = "Category not deleted";
            response.data = '';
        }
        return response;
    }
    async updateCategory(data:Icategory,id:string){
        const {color,icon, isEditable, name}=data;
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, {color,icon, isEditable, name}, {new: true});
        if(updatedCategory){
            response.success = true;
            response.message = "Category updated successfully";
            response.data = updatedCategory;
        }else{
            response.success = false;
            response.message = "Category not updated";
            response.data = '';
        }
        return response;
    }
}
export default new CategoryService