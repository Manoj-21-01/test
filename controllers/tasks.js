import { v4 as uuid } from "uuid";
// import Task from "../models/tasks.js";

let tasks = [];

export const getTasks = (req,res) => {
    res.send(tasks);
};

// export const getTasks = async () => {
//     const data = await Task.find();
//     return data;
// }

export const createTask = (req,res) => {
    const task = req.body;
    tasks.push({...task, id: uuid()});
    res.send("Task created successfully");
}

// export const createTask = async (body) => {
//     const data = await Task.create(body);
//     return data;
// }

export const getTaskbyid = (req,res) => {
    const task = tasks.filter((task) => task.id === req.params.id);
    res.send(task);
}

export const deleteTaskbyid = (req,res) => {
    tasks = tasks.filter((task) => task.id !== req.params.id);
    res.send("Task deleted successfully");
}

export const updateTaskbyid = (req,res) => {
    const task = tasks.find((task) => task.id === req.params.id);
    
    task.title = req.body.title;
    task.description = req.body.description;
    task.dueDate = req.body.dueDate;

    res.send("Task updated successfully");
}