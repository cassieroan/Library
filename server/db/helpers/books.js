const client = require("../client");

//Create
const createBook = async ({ title, author, pub_year, genre, status }) => {
  try {
    const {
      rows: [books],
    } = await client.query(
      `
                INSERT INTO books(title, author, pub_year, genre, status)
                VALUES($1, $2, $3, $4, $5)
                RETURNING *;
            `,
      [title, author, pub_year, genre, status]
    );
    return books;
  } catch (error) {
    throw error;
  }
};

//Get All Books
const getAllBooks = async () => {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM books;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

//Get book by ID
const getBookById = async (bookId) => {
  try {
    const {
      rows: [books],
    } = await client.query(
      `
              SELECT *
              FROM books
              WHERE "bookId" =${bookId};
          `
    );
    return books;
  } catch (error) {
    throw error;
  }
};

// Delete book by ID
const deleteBook = async (bookId) => {
  try {
    const result = await client.query(
      `
        DELETE FROM books
        WHERE "bookId" = $1
      `,
      [bookId]
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { createBook, getAllBooks, getBookById, deleteBook };
