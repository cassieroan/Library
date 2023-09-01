const client = require("../client");

const createUser = async ({ username, email, role }) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
                INSERT INTO users(username, email, role )
                VALUES($1, $2, $3)
                RETURNING *;
            `,
      [username, email, role]
    );
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };
