import express from "express";
import { tasks } from "../src/utils.js"

const router = express.Router();

router.get("/tasks", (req, res) => {
    res.json(tasks);
});

router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.json(task);
});

router.get("/users", (req, res) => {
    res.json(req.app.locals.users);
});

export default router;