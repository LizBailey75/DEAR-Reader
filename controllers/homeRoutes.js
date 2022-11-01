const router = require('express').Router();
const Books = require('../models/Books');
const User = require('../models/User');

router.get('/', (req,res)=> {
  res.render('login', {layout: 'index'})
});

router.get('/home', (req, res)=> {
  res.render('homepage', {layout: 'index'})
});
module.exports= router;






////This route gets the homepage, we need a different route for books
//router.get('/', async (req, res) => {
// const bookData = await Books.findAll().catch((err) => {
//  res.json(err);
//});
//   const book = bookData.map((book) => book.get
//    ({ plain: true }));
//    res.render('/login', { book });
 // });

//This goes to the page where user can add a review
//SECOND PAGE
// router.get('/user', async (req, res) => {
//   const bookData = await Books.findAll().catch((err) => {
//     res.json(err);
//   });
//     const book = bookData.map((book) => book.get
//     ({ plain: true }));
//     //This tells what page to get
//     res.render('homepage.handlebars', { book });
//   });

//   // This goes to page where book data should go
//   //*Third Page
//   router.get('/book', async (req, res) => {
//     const bookData = await Books.findAll().catch((err) => {
//       res.json(err);
//     });
//     //Is this the sequelize function?
//       const book = bookData.map((book) => book.get
//       ({ plain: true }));
//       res.render('book.handlebars', { book });
//     });

//   // Route to get one book
//   //NOT WORKING
//   router.get('/book/:id', async (req, res) => {
//     try {
//       const bookData = await Book.findByPk(req.params.id);
//       if(!bookData) {
//         res.status(404).json({message: 'No book with this id!'});
//         return;
//       }
//       const book = bookData.get({ plain: true });
//       res.render('book', book);
//     } catch (err) {
//       res.status(500).json(err);
//     };
//   });

//   module.exports = router;

