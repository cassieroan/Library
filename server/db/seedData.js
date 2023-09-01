//Make some arrays of objects based on the schema design

//Books
const books = [
  {
    title: "Harry Potter and the Dealthy Hallows",
    author: "J.K. Rowling",
    pub_year: "2007",
    genre: "Fantasy",
    status: "available",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    pub_year: "2010",
    genre: "Mystery",
    status: "borrowed",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pub_year: "1940",
    genre: "Classics",
    status: "unavailable",
  },
  {
    title: "Catcher in the Rye",
    author: "J.D. Sallinger",
    pub_year: "1950",
    genre: "Classics",
    status: "available",
  },
  {
    title: "Tomorrow and Tomorrow and Tomorrow",
    author: "Gabrielle Zevin",
    pub_year: "2022",
    genre: "Fiction",
    status: "unavailable",
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    pub_year: "2021",
    genre: "Nonfiction",
    status: "available",
  },
];

//Users
const users = [
  { username: "glitterqueen", email: "glitterqueen@gmail.com", role: "user" },
  { username: "guywholikestoread", email: "johngreen@gmail.com", role: "user" },
  { username: "croan", email: "cassandracroan@gmail.com", role: "librarian" },
];

//Checkouts
const checkouts = [
  {
    checkout_date: 2023 - 8 - 31,
    due_date: 2023 - 10 - 31,
    bookID: 3,
    userID: 1,
  },
  {
    checkout_date: 2023 - 8 - 15,
    due_date: 2023 - 10 - 15,
    bookID: 5,
    userID: 2,
  },
];

module.exports = { books, users, checkouts };
