const client = require("../client");

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

module.exports = { createBook, getAllBooks };
