import { useEffect, useState } from 'react';
import { getBookById } from '../fetching';
import { useParams } from 'react-router-dom';
import '../App.css';

function BookDetails() {
  const { bookId } = useParams();

  const [book, setBook] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const books = await getBookById(bookId)
      setBook(books);
    }
    fetchData();
  }, []);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details-container">
      <div className="book-image-card">
        <img src={book.img_url} alt={book.title} />
      </div>
      <div className="book-details">
        <h1>{book.title}</h1>
        <h2><i>{book.author}</i></h2>
        <p>Genre: {book.genre}</p>
        <p>Published: {book.pub_year}</p>
        <p><b>Description:</b></p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
