const client = require("../client");

const createUser = async (body) => {
  console.log(body);
  try {
    const {
      rows: [users],
    } = await client.query(
      `
                INSERT INTO users(username, email, role)
                VALUES($1, $2, $3)
                RETURNING *;
            `,
      [body.username, body.email, body.role]
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

//Get user by ID
const getUserById = async (userId) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
              SELECT *
              FROM users
              WHERE "userId" =${userId};
          `
    );
    return users;
  } catch (error) {
    throw error;
  }
};

// Delete user
const deleteUser = async (userId) => {
  try {
    const result = await client.query(
      `
        DELETE FROM users
        WHERE "userId" = $1
      `,
      [userId]
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getAllUsers, getUserById, deleteUser };
