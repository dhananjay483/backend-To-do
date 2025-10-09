// here we define our To-Do Schema
import mongoose from "mongoose";
import { boolean } from "yup";
// define a model for mongoose database
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        required : true
    },
    isImportant : 
})