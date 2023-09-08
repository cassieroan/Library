import { useState, useEffect } from 'react';
import { getAllAvailableBooks } from '../fetching';
import { Link } from 'react-router-dom';

export default function Home() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const books = await getAllAvailableBooks();
      setAllBooks(books);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All available books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allBooks ? (
          allBooks.map(({ bookId, title, img_url }) => (
            <Link key={bookId} to={`/books/${bookId}`}  className="book-card">
              <div key={bookId}>
                <img src={img_url} alt={title} className="book-image" />
                <p>{title}</p>
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
