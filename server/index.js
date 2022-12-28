import express from 'express'
import cors from "cors";
import { connection } from "./database/db.js"
import { Todo } from './model/todo.js'
const app = express();
app.use(express.json())// when we send json data from frontend to backend
app.use(cors());// cross origin resorce sharing when frontend and backend are running on diff. port then user can not
// send data from backend to frontend and vice versa. thats why we use this middleware to remove the error
connection();
const PORT = process.env.PORT || 8000
// app.get("/", (req, res) => {
//     console.log("this is get request")
//     res.end("hello from backend")
// })
app.post("/todos", async (req, res) => {
    try {
        const newTodo = await Todo.create({
            todoName: req.body.todoName,
            createdAt: Date.now()
        });

        res.status(200).send(newTodo);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get("/todos", async (req, res) => {
    try {
        const getAllTodos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).send(getAllTodos);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get("/todos/:_id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params._id);
        const updatedTodo = await Todo.findByIdAndUpdate(req.params._id, { done: !todo.done }, { new: true })// {new:true} by using it. it will return updated todo
        console.log(updatedTodo)
        res.status(200).send(updatedTodo);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.patch("/todos/:_id", async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params._id, req.body, { new: true })// {new:true} by using it. it will return updated todo
        console.log(updatedTodo)
        res.status(200).send(updatedTodo);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete("/todos/:_id", async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params._id);
        console.log(deletedTodo)
        if (!req.params._id) {
            return res.status(400).send("specify the todo id");
        }
        res.status(200).send(deletedTodo);
    } catch (error) {
        res.status(500).send(error.message)
    }
})
app.listen(PORT, () => {
    console.log(`server is  running on port ${PORT}`);
})

