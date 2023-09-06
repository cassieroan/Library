import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ allBooks }) {
  return (
    <>
      {allBooks ? (
        allBooks.map(({ bookId, title }) => (
          <Book key={bookId} book={{ bookId, title }} />
        ))
      ) : (
        <p>No books available.</p>
      )}
    </>
  );
}

BookList.propTypes = {
  allBooks: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add more prop types for other properties as needed
    })
  ),
};

export default BookList;
