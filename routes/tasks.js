import express from "express";
import { getTasks,createTask,getTaskbyid,deleteTaskbyid,updateTaskbyid } from "../controllers/tasks.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/task/:id", getTaskbyid);

router.post("/task", createTask);

router.delete("/task/:id", deleteTaskbyid);

router.put("/task/:id", updateTaskbyid);

export default router;