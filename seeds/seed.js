// Do seed.js and index.js do the samge thing?
const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


// const sequelize = require('../config/connection');
// const { User, Books, Comments } = require('../models');

// const userData = require('./userData.json');
// const bookData = require('./bookData.json');
// const commentData = require('./commentData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: false });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await Books.bulkCreate(bookData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await Comments.bulkCreate(commentData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();
