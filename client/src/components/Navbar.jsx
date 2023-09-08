import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="/" className="logo">Cassie's Library</a>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/books" className="nav-link">Books</Link></li>
          <li><Link to="/users" className="nav-link">Users</Link></li>
          <li><Link to="/users/new" className="nav-link">Add User</Link></li>
        </ul>
      </div>
    </nav>
  );
}
