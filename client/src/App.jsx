import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails'; 
import Home from './components/Home';
import NewUser from './components/NewUser';

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
      </Routes>
    </Router>
  );
}

export default App;
