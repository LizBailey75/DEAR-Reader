    
const searchBookFormHandler = async (event) => {
    event.preventDefault();
  
    const bookTitle = document.querySelector('#bookId').value.trim();

    
      const response = await fetch('/api/user_db', {
        method: 'GET',
        body: JSON.stringify({ bookTitle, user_id, comment, stars }),
        headers: { 'Content-Type': 'application/json' },
      });
// don't know if this is right
      if (response.ok) {
        //document.location.replace;
      } else {
        alert('Failed to get data');
      }
    };
    