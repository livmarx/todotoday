// Access to database:
const { db } = require('./dbServer');

// Defining Models:
// const { ToDo } = require('./ToDo');
const { User, Event } = require('./User');
//const { Event } = require('./User');
// const { List } = require('./List');

// Associations
// ToDo.belongsTo(List);
// List.hasMany(ToDo);

// User.hasOne(List);
// List.belongsTo(User);

module.exports = { db, User, Event };
