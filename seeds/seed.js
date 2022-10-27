const sequelize = require('../config/connection');
const { User, Books, Comments } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Books.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
