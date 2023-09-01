const client = require("../client");

const createCheckout = async ({ checkout_date, due_date, bookID, userID }) => {
  try {
    const {
      rows: [checkouts],
    } = await client.query(
      `
                INSERT INTO checkouts(checkout_date, due_date, "bookID", "userID" )
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
      [checkout_date, due_date, bookID, userID]
    );
    return checkouts;
  } catch (error) {
    throw error;
  }
};

module.exports = { createCheckout };
