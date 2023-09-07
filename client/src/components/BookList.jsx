import React from 'react';
import PropTypes from 'prop-types';

function BookList({ allBooks }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {allBooks ? (
        allBooks.map(({ bookId, title, img_url }) => (
          <div key={bookId} className="book-card">
            <img src={img_url} alt={title} className="book-image" />
            <p>{title}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

BookList.propTypes = {
  allBooks: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img_url: PropTypes.string.isRequired,
    })
  ),
};

export default BookList;
