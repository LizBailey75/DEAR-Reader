const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

router.use('/book', bookRoutes); //(third page)
router.use('/user', userRoutes);//(second page)
module.exports = router;


