
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Use Link for navigation
import './style.css';

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav>
        <h2>⚡ Developers Hub</h2>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h1>Developers Hub</h1>
        <p>
          Create a developer profile/portfolio, share posts, and get help from other developers.
        </p>
        <div className="button-container">
          <Link to="/register" className="mx-2 signup-btn">Sign Up</Link>
          <Link to="/login" className="mx-2 login-btn">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
