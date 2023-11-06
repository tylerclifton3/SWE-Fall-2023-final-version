import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        'https://wdlnvxccyg.execute-api.us-east-1.amazonaws.com/beta/',
        {
          username: email,  // Set the username to the email
          password: 'password' 
        }
      );

      console.log('User created:', response.data.message);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleLogin = async () => {
    try {
      // Perform the login request to your backend API
      const response = await axios.post(
        'https://wdlnvxccyg.execute-api.us-east-1.amazonaws.com/beta/', 
        {
          username: email,
          password: password
        }
      );

      if (response.status === 200) {
        // Login successful
        console.log('Login successful');
        // Redirect to the home page or the desired destination
        history.push('/');
      } else {
        // Handle other response statuses if needed
      }
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateUser}>Create User</button>
        <div style={{ marginTop: 20 }}>
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
