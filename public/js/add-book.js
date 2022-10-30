async function newFormHandler(event) {
    event.preventDefault();

    // I thinkn these ARE getting created from HERE, but not definite
    const book_title = document.querySelector('#book_title').value;
    const author = document.querySelector('#author').value;
    const synopsis = document.querySelector('#synopsis').value;
    const pagecount = document.querySelector('#genre').value;
    const genre = document.querySelector('#pagecount').value;
    const user_id = document.querySelector('#user_id').value;
  //What does this do??  Does it have to be called API/book routes
    const response = await fetch(`/api/bookRoutes`, {
      method: 'POST',
      body: JSON.stringify({
        book_title,
        author,
        synopsis,
        pagecount,
        genre,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(response)
    if (response.ok) {
      document.location.replace('/book');
    } else {
      alert('Failed to add book');
    }
  }
  
  document
    //This is not the right syntax for .new-book-form,
    // need to find the name from html or handlebars
    .querySelector('.new-book-form')
    .addEventListener('submit', newFormHandler);
  