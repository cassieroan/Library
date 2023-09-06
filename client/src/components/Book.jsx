import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const { bookId, title } = book; // Destructure book object

  return <p key={bookId}>{title}</p>;
}

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // Add more prop types for other properties as needed
  }).isRequired,
};

export default Book;
