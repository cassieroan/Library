import { useEffect, useState } from 'react';
import { getBookById } from '../fetching';
import { useParams } from 'react-router-dom';
import '../App.css';
import { createCheckout } from '../fetching';
function BookDetails() {
  const { bookId } = useParams();

  const [book, setBook] = useState(null);
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const books = await getBookById(bookId);
      setBook(books);
    }
    fetchData();
  }, [bookId]);

  if (!book) {
    return <p>Loading...</p>;
  }

  //Calculate the due date (two months from the current date)
  const calculateDueDate = () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 2);
    return currentDate.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
  };

  //Handle the checkout submission
  const handleCheckout = async (e) => {
    e.preventDefault();

    // Get the calculated due date
    const due_date = calculateDueDate();

    // Create the checkout object to send to the API
    const checkoutData = {
      checkout_date: new Date().toISOString().split('T')[0],
      due_date,
      bookId,
      userId,
    };

    // Call the API to create the checkout
    try {
      const checkout = await createCheckout(checkoutData);
      setSuccessMessage(`Checkout successful! Please return your book on: ${due_date}`);
    } catch (error) {
      console.error('Error creating checkout:', error);
      setSuccessMessage('Checkout failed. Please try again.');
    }
  };

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

        <div>
          <form onSubmit={handleCheckout}>
            <label style={{ marginRight: '10px' }}>
              <b>User ID:</b>
              <input
                type="text"
                style={{ marginLeft: '5px' }}
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </label>
            <button type="submit">Checkout</button>
          </form>
        </div>

        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
}

export default BookDetails;