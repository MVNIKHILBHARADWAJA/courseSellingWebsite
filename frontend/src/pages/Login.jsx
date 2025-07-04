import React from 'react'
import "./Auth.css";
import {Link} from 'react-router-dom';
const Login = () => {
  return (
   <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="auth-links">
        <Link to="/forgot-password">
          Forgot Passwoed
          </Link>
          <span>Don't you have an account?<Link to="/register">Register</Link></span>
        </div>
      </div>
  )
}

export default Login