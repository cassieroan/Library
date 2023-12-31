const client = require("../client");

const createUser = async (body) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
                INSERT INTO users(username, email, role, password_hash)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
      [body.username, body.email, body.role, body.password_hash]
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
          WHERE userId = $1
      `,
      [userId]
    );
    return users;
  } catch (error) {
    throw error;
  }
};

//Get user by username
const getUserByUsername = async (username) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
          SELECT *
          FROM users
          WHERE username = $1
      `,
      [username]
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

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  getUserByUsername,
};
