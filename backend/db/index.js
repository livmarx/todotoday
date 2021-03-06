// Access to database:

const { db } = require('./dbServer');
const Sequelize = require('sequelize');

// Defining Models:
// const { ToDo } = require('./ToDo');
const { User, Toilet, Comment } = require('./User');
//const { Event } = require('./User');
// const { List } = require('./List');

// Associations

Comment.belongsTo(User);
User.hasMany(Comment);

Toilet.hasMany(Comment);
Comment.belongsTo(Toilet);

module.exports = { db, User, Toilet, Comment };
