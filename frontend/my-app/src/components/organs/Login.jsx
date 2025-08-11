import React, { useState } from 'react';
import "../../styles/loginPage.css"; // Make sure this CSS file uses updated class names

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  };

  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="login-input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="login-input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className="login-remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="login-register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
