const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
////const homeRoutes = require('./homeRoutes');

router.use('/book', bookRoutes); //(third page)
router.use('/user', userRoutes);//(second page)
//router.use('/', homeRoutes); //first page
module.exports = router;


