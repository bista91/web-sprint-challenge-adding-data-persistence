// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getAll() {
    return db('resources');
}

async function create(resource) {
    const [id] = await db('resources').insert(resource);
    return getById(id);
}

async function getById(id) {
    return db('resources').where('resource_id', id).first();
}

module.exports = {
    getAll,
    create,
    getById,
};
