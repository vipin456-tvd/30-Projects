import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
            
        },
        complete:{
            type:Boolean,
            default:false,
        },
        createdBy:{
            type:mongoose
        }
    }, { timestamps: true });
export const Todo = mongoose.model("Todo", todoSchema);
