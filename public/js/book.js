// I don't think this page does anything yet

const express = require('express');
const app = express();
const port = 3001;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

//hbs is a shorthand extension name for handlebars

app.engine('hbs', handlebars.engine ({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    //partialsDir: `${__dirname}/views/partials`,
}));

app.use(express.static('public'));

// To dynamically inject a value that we get 
//from a database or api inside the file to send 
//Set it inside the object of the render method
const fakeApi = () => {
  return [{
    name: 'Katarina',
    lane: 'midlaner'
},
{
    name: 'Jayce',
    lane: 'toplaner'
},
{
    name: 'Heimerdinger',
    lane: 'toplaner'
},
{
    name: 'Zed',
    lane: 'midlaner'
},
{
    name: 'Azir',
    lane: 'midlaner'
}
]
}

//I don't think this example works
app.get('/', (req, res) => {
  res.render('main', {layout: 'index', suggestedChamps: fakeApi()});
});

// app.listen(port, () => {
//   console.log(`App listening to port ${port}`);
// });


  //   const response = await fetch(`/api/bookRoutes`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       book_title,
  //       author,
  //       synopsis,
  //       pagecount,
  //       genre,
  //       user_id
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // console.log(response)
  //   if (response.ok) {
  //     document.location.replace('/book');
  //   } else {
  //     alert('Failed to add book');
  //   }
  // }
  
  // document
  //   //This is not the right syntax for .new-book-form,
  //   // need to find the name from html or handlebars
  //   .querySelector('.new-book-form')
  //   .addEventListener('submit', newFormHandler);
  