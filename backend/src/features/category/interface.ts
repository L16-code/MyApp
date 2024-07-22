import { IUsersSchema } from "../users/model";

export interface Icategory{
    name:string;
    user:IUsersSchema| string;
    color:ColorSchema;
    icon:IIcon;
    isEditable:boolean;
}
export interface ColorSchema{
    name:string;
    id:string;
    code:string;
}
export interface IIcon{
    name:string;
    id:string;
    symbol:string;
}