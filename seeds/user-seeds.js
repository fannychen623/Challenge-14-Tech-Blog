const { User } = require('../models');

const userData = [
  {
    username: "Rene",
    password: "testing123"
  },
  {
    username: "Tyler",
    password: "testing456"
  },
  {
    username: "Amber",
    password: "testing789"
  }
];

const seedCategories = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedCategories;