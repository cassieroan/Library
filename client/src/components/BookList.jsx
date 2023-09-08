import { useState, useEffect } from 'react';
import { getAllBooks } from '../fetching';
import { Link } from 'react-router-dom'; // Import Link


function BookList() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const books = await getAllBooks();
      setAllBooks(books);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allBooks ? (
          allBooks.map(({ bookId, title, status, img_url }) => (
            <Link key={bookId} to={`/books/${bookId}`}  className="book-card">
              <div key={bookId}>
                <img src={img_url} alt={title} className="book-image" />
                <p style={{
                  color: status === 'available' ? 'green' : 'red'
                }}>{title}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
    
  );
}

BookList.propTypes = {
};

export default BookList;
