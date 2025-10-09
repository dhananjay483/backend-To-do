// here we define our To-Do Schema model
import mongoose from "mongoose";

// define a model for mongoose database
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isImportant: {
        type: Boolean,
        enum: ['High', 'Medium', 'Low'],
        default: 'Low'
    },
    {
        timestamps: true,
    },
})
const Task = mongoose.model('Task', todoSchema);
export default Task;