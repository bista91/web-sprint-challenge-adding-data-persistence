// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

// Validate resource middleware
const validateResource = (req, res, next) => {
    const { resource_name } = req.body;
    if (!resource_name) {
        return res.status(400).json({ message: 'Resource name is required' });
    }
    next();
};

// GET all resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll();
        res.json(resources);
    } catch (err) {
        next(err);
    }
});

// POST a new resource
router.post('/', validateResource, async (req, res, next) => {
    try {
        const newResource = await Resource.create(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
            res.status(400).json({ message: 'Resource name must be unique' });
        } else {
            next(err);
        }
    }
});

module.exports = router;
