import './App.css';
import { useState, useEffect } from 'react';
import { getAllBooks, getAllUsers } from './fetching';
import BookList from './components/BookList';
import UserList from './components/UserList'
import Navbar from './components/Navbar';

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Use Promise.all to fetch both books and users simultaneously
      const [books, users] = await Promise.all([getAllBooks(), getAllUsers()]);

      console.log(books); // Log the books response
      console.log(users); // Log the users response

      setAllBooks(books);
      setAllUsers(users);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Available Books</h1>
      <BookList allBooks={allBooks} />
      <h1>Users</h1>
      <UserList users={allUsers} />
    </>
  );
}

export default App;
