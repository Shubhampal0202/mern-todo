import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export const Todo = mongoose.model("todos",todoSchema);