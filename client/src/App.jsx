import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllBooks, getAllUsers } from './fetching';
import BookList from './components/BookList';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails'; 


function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Use Promise.all to fetch both books and users simultaneously
      const [books, users] = await Promise.all([getAllBooks(), getAllUsers()]);

      console.log(books);
      console.log(users);

      setAllBooks(books);
      setAllUsers(users);
      
    }

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/books" element={<BookList allBooks={allBooks} />} />
        <Route path="/books/:bookId" element={<BookDetails allBooks={allBooks} />} />
        <Route path="/users" element={<UserList allUsers={allUsers}/>} />
      </Routes>
    </Router>
  );
}

export default App;
