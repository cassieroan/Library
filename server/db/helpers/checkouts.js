const client = require("../client");

const createCheckout = async ({ checkout_date, due_date, bookId, userId }) => {
  try {
    const {
      rows: [checkouts],
    } = await client.query(
      `
                INSERT INTO checkouts(checkout_date, due_date, "bookId", "userId" )
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
      [checkout_date, due_date, bookId, userId]
    );
    return checkouts;
  } catch (error) {
    throw error;
  }
};

const getAllCheckouts = async () => {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM checkouts;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

//Get checkout by ID
const getCheckoutById = async (checkoutId) => {
  try {
    const {
      rows: [checkouts],
    } = await client.query(
      `
              SELECT *
              FROM checkouts
              WHERE "checkoutId" = $1
      `,
      [checkoutId]
    );
    return checkouts;
  } catch (error) {
    throw error;
  }
};

module.exports = { createCheckout, getAllCheckouts, getCheckoutById };
