import './Auth.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>
      <div className="auth-links">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
