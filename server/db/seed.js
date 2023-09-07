// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION
//pulling in connection to my local database
const client = require("./client");

const { createBook, getAllBooks } = require("./helpers/books");
const { createUser } = require("./helpers/users");
const { createCheckout } = require("./helpers/checkouts");

const { books, users, checkouts } = require("./seedData");

// Drop Tables
const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
          DROP TABLE IF EXISTS checkouts;
          DROP TABLE IF EXISTS books;
          DROP TABLE IF EXISTS users;
      `);
    console.log("Tables dropped!");
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
};

//Create Tables
const createTables = async () => {
  console.log("Building tables...");
  await client.query(`
          CREATE TABLE users (
              "userId" SERIAL PRIMARY KEY,
              username varchar(50) NOT NULL,
              email varchar(100) NOT NULL,
              role varchar(20) NOT NULL
          );
          CREATE TABLE books (
              "bookId" SERIAL PRIMARY KEY,
              title varchar(255) UNIQUE NOT NULL,
              author varchar(255) NOT NULL,
              pub_year INT,
              genre varchar(100) NOT NULL,
              status varchar(20) NOT NULL,
              img_url varchar(255),
              description text
          );
          CREATE TABLE checkouts (
            "checkoutId" SERIAL PRIMARY KEY,
            checkout_date DATE,
            due_date DATE,
            "bookId" INTEGER REFERENCES books("bookId") NOT NULL,
            "userId" INTEGER REFERENCES users("userId")
        );
        
      `);
  console.log("Tables built!");
};

//Insert mock data from seedData.js
//Create books
const createInitialBooks = async () => {
  try {
    //Looping through the "books" array from seedData
    for (const book of books) {
      //Insert each book into the table
      await createBook(book);
    }
    console.log("created book");
  } catch (error) {
    throw error;
  }
};

//Create user
const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await createUser(user);
    }
    console.log("created user");
  } catch (error) {
    throw error;
  }
};

//Create checkout
const createInitialCheckouts = async () => {
  try {
    for (const checkout of checkouts) {
      await createCheckout(checkout);
    }
    console.log("created checkout");
  } catch (error) {
    throw error;
  }
};

//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
  try {
    //Run our functions
    await dropTables();
    await createTables();

    //Generating starting data
    console.log("starting to seed...");
    await createInitialBooks();
    await createInitialUsers();
    await createInitialCheckouts();
  } catch (error) {
    console.error(error);
  } finally {
    //close our connection
    await client.end();
  }
};

rebuildDb();
