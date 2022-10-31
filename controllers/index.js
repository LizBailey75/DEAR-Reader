const router = require('express').Router();


//const apiRoutes = require('./api');
const bookRoutes = require('./api/bookRoutes');
const userRoutes = require('./api/userRoutes');
//const homeRoutes = require('./api/homeRoutes');

//router.use('/', homeRoutes);//First page
//router.use('/api', apiRoutes);//??  NOT WORKING?
router.use('/book', bookRoutes);//Third PAGE
router.use('/user', userRoutes);//Second Page

module.exports = router;

// router.get('/', async (req, res) => {
//     // Add a comment describing the purpose of the render method
//     // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
//     res.render('homepage.handlebars');
//   });

//   router.get('/api/userRoutes', async (req, res) => {
//     return res.render('user', User[req.params.num -1]);
//   });

  
// router
//     .post('/signup', function (req, res, next) {
//         let user = new User(req.body);    

//         user.save(function (err) {
//             if (err) res.send(err);
//             else res.json({message: 'user has been created'});
//         })

//     });

// module.exports = router;
