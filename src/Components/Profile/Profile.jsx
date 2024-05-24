import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for styling

function Profile({ handleLogin, handleLogout }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const validEmail = "afuethomas@gmail.com";
    const validPassword = "Afueth^@123";

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      handleLogin();
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    handleLogout();
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h1>Welcome Afueth Thomas 😊</h1>
          <button onClick={handleLogoutClick} className="logout-button">Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      )}
      {!isLoggedIn && (
        <div className="login-message">
          This server does not allow self registrations.
          <br />
          If you need an account, please contact Afueth:
          <a href="mailto:afueththomas@yahoo.com" className="email-link"> "afueththomas@yahoo.com"</a>
        </div>
      )}
    </div>
  );
}

export default Profile;
