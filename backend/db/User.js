const Sequelize = require('sequelize');
const { db } = require('./dbServer');

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      // should be unique
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    //encrypted
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
  },
  invitedTo: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  attending: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  pastEvents: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});

// how are we associating user w other users? User.belongsTo(User)? dont want all users associated..?

module.exports = { User, Event };
