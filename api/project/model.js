// build your `Project` model here
const db = require('../../data/dbConfig');

async function getAll() {
    const projects = await db('projects');
    return projects.map(project => ({
        ...project,
        project_completed: Boolean(project.project_completed),
    }));
}

async function create(project) {
    const [id] = await db('projects').insert(project);
    return getById(id);
}

async function getById(id) {
    const project = await db('projects').where('project_id', id).first();
    if (project) {
        return {
            ...project,
            project_completed: Boolean(project.project_completed),
        };
    }
    return null;
}

module.exports = {
    getAll,
    create,
    getById,
};
