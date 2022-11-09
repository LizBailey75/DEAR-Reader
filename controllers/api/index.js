const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
//const exercises = require('./excercises');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
//router.use('/excercises', exercises);

module.exports = router;


