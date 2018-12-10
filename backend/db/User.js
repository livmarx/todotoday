const Sequelize = require('sequelize');
const { db } = require('./dbServer');

const Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT,
  },
});

const Toilet = db.define('toilet', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.BIGINT,
    // allowNull: false,
  },
  longitude: {
    type: Sequelize.BIGINT,
    // allowNull: false,
  },
  toiletType: {
    type: Sequelize.ENUM,
    values: ['Public', 'In-Store', 'In-Home'],
  },
  priceRange: {
    type: Sequelize.ENUM,
    values: ['$', '$$', '$$$', '$$$$'],
  },
  rating: {
    type: Sequelize.ENUM,
    values: ['1', '2', '3', '4', '5'],
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
});

module.exports = { User, Toilet, Comment };
