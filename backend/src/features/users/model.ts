import mongoose, { ObjectId, Schema } from 'mongoose';

export interface IUsersSchema extends Document {
    name:string;
    email:string;
    password:string;
    createdAt: Date;
    updatedAt: Date;
}
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},
{ timestamps: true })

export const UserModel = mongoose.model<IUsersSchema>('users', UserSchema);