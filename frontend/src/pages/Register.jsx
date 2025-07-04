import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <div className="auth-links">
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </div>
    </div>
  );
};

export default Register;
