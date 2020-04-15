const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps,
    add
};

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first()
}

function findSteps(id) {
    return db('steps').where({scheme_id: id})
}

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id')
        .then(([id]) => {
            return findById(id)
        })
}