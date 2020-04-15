const db = require("../data/db-config.js");

module.exports = {
addStep
};

function addStep(step, scheme_id) {
    return db('steps')
        .where({id: scheme_id})
        .insert(step)
}