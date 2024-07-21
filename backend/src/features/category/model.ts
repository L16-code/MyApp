import mongoose, { ObjectId, Schema } from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isEditable:{
        type:Boolean,
        default:true,
        required: false
    },
    color:{
        id: String,
        name: String,
        code:String
    },
    icon:{
        id: String,
        name: String,
        symbol:String,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
},
{ timestamps: true })

export const CategoryModel = mongoose.model('Category', CategorySchema);