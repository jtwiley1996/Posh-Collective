import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="logo-link">
          <span className="logo-text">P O S H</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

