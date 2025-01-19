// build your `Task` model here
const db = require('../../data/dbConfig');

async function getAll() {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        );

    return tasks.map(task => ({
        ...task,
        task_completed: Boolean(task.task_completed),
    }));
}

async function create(task) {
    const [id] = await db('tasks').insert(task);
    return getById(id);
}

async function getById(id) {
    const task = await db('tasks').where('task_id', id).first();
    if (task) {
        return {
            ...task,
            task_completed: Boolean(task.task_completed),
        };
    }
    return null;
}

module.exports = {
    getAll,
    create,
    getById,
};
