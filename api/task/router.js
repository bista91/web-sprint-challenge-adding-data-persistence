// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

// Validate task middleware
const validateTask = (req, res, next) => {
    const { task_description, project_id } = req.body;
    if (!task_description) {
        return res.status(400).json({ message: 'Task description is required' });
    }
    if (!project_id) {
        return res.status(400).json({ message: 'Project ID is required' });
    }
    next();
};

// GET all tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

// POST a new task
router.post('/', validateTask, async (req, res, next) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
