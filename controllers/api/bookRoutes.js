// PLEASE UPDATE THIS PAGE



const router = require('express').Router();
const Books = require('../../models/Books');

//Route to create a book for review
//(NOT WORKING< ONLY BRINGING UP BOOK>HANDLBARES PAGE WITH NO DATA)
router.get('book', async (req, res) => {
  const bookData = await Books.findAll().catch((err) => {    
    res.json(err);
  });

  
  //Is this the sequelize function?
    const books = bookData.map((book) => book.get
    ({ plain: true }));
    console.log(books)
    res.render('/book', { name: 'books' }, function (err, html) {
      [
        {
          "title": "Where the Red Fern Grows",
          "author": "Wilson Rawls",
          "synopsis": "Billy, Old Dan, and Little Ann—a boy and his two dogs",
          "pagecount": 272,
          "genre": "Classics",
          "user_id": "1"
        }
    ]
    });
  });

// Route to create/add a book
router.post('/book', async (req, res) => {
  try {
    const bookData = await Books.bulkCreate({
      book_title: req.body.book_title,
      author: req.body.author,
      synopsis: req.body.synopsis,
      pagecount: req.body.pagecount,
      genre: req.body.genre,
      user_id: req.body.user_id
    });
    res.json({"book" : "bookData"});
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//This action method is the controller.  It accepts input and sends data to the Model and the View.
router.put('/book:id', async (req, res) => {

    //This sends the data to the model so that one book can be updated with new data in the database.
    try {
      const book = await Books.update(
        {
          book_title: req.body.book_title,
          author: req.body.author,
          synopsis: req.body.synopsis,
          pagecount: req.body.pagecount,
          genre: req.body.genre,
          user_id: req.body.user_id
        },
        {
          where: {
            id:req.params.id,
          },
        }
      );
        //If the database is updated successfully
      //The updated data (book) is then sent back to handler that dispatched the fetch request.
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
    router.get
});

module.exports = router;