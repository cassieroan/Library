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

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM users;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getAllUsers };
