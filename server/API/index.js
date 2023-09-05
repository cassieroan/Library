const express = require("express");
const { getAllBooks } = require("../db/helpers/books");
const { getAllUsers } = require("../db/helpers/users");
const { getAllCheckouts } = require("../db/helpers/checkouts");

// Create a subrouter for the '/api/' subroute
const apiRouter = express.Router();

apiRouter.get("/foo", (req, res) => {
  res.json({ hello: "WORLD!!", foo: "Bar" });
});
//Books
apiRouter.get("/books", async (req, res) => {
  const books = await getAllBooks();
  res.json(books);
});

//Users
apiRouter.get("/users", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

//Checkouts
apiRouter.get("/checkouts", async (req, res) => {
  const checkouts = await getAllCheckouts();
  res.json(checkouts);
});

module.exports = { apiRouter };
