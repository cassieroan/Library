import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="/" className="logo">Library App</a>
        <ul>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/books" className="nav-link">Books</a></li>
          <li><a href="/users" className="nav-link">Users</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
