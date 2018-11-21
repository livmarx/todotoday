const Sequelize = require('sequelize');
const { db } = require('./dbServer');

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
  // attending: {
  //   type: Sequelize.ARRAY,
  // },
  // pastEvents: {
  //   type: Sequelize.ARRAY,
  // },
});

// how are we associating user w other users? User.belongsTo(User)? dont want all users associated..?

module.exports = { User };
