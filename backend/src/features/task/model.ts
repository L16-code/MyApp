import mongoose, { ObjectId, Schema } from 'mongoose';

const taskSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    },
    isEditable : {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
},
    { timestamps: true })

export const TaskModel = mongoose.model('task', taskSchema);