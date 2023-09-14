import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails'; 
import Home from './components/Home';
import NewUser from './components/NewUser';
import LogIn from './components/LogIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/new" element={<NewUser />} />
        <Route path="/users/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
