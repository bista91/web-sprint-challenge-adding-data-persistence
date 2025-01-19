// build your server here and require it from index.js
const express = require('express');
const projectsRouter = require('./project/router'); // Assuming path is correct
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json()); // Middleware to parse JSON requests

// Mount routers for different routes
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

// Global error handling middleware
server.use((err, req, res, next) => {
  console.error(err); // Log the error (you can replace this with a logger in production)

  // Return a generic error message with status code 500 for unexpected errors
  res.status(500).json({
    message: "Something went wrong on the server.",
    error: err.message || 'Internal Server Error',
  });
});

module.exports = server;
