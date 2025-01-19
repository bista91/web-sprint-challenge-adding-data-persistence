// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

// Validate project middleware
const validateProject = (req, res, next) => {
    const { project_name } = req.body;
    if (!project_name) {
        return res.status(400).json({ message: 'Project name is required' });
    }
    next();
};

// GET all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll();
        res.json(projects);
    } catch (err) {
        next(err);
    }
});

// POST a new project
router.post('/', validateProject, async (req, res, next) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
