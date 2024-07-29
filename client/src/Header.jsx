import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <span className="logo-text">P O S H  C O L L E C T I V E</span>
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
