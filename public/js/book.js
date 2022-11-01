$(document).ready(function() {
  console.log("page ready");
});

async function loadBooks() {
  const response = await fetch("/book");
  const books = await response.json();

  return books;

}
//does this work?
fetch(`bookData.json`)
.then(async (data) => {
    if (data.ok) {
        data = await data.json()
        //Here you have your data...
    }

}).catch(e => console.log('Connection error', e))


document.addEventListener("DOMcontentLoaded", async () => {
  let books = [];
  try {
    books = await loadBooks();
  } catch (e) {
    console.log("Error!");
    console.log(e);
  }
  
  console.log(books);
});
document.body.appendChild(books)