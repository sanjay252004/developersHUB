import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
// import { ConnectionStates } from 'mongoose';

const Login = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //   const submitHandler = async (e) => {
  //     e.preventDefault();

  //     // try {
  //     //     const response = await axios.post('http://localhost:5001/login', data);
  //     //     console.log("Login successful:", response.data);
  //     // } catch (error) {
  //     //     console.error("Login failed:", error.response?.data || error.message);
  //     // }
  // };

  // const submitHandler = async (e) => {
  //      e.preventDefault();

  //      const response = await axios.post('http://localhost:5001/login', data);
  //     res => localStorage.setItem('token',res.data.token)

  //   };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/login", data);

      // ✅ Store token in localStorage
      localStorage.setItem("token", response.data.token);
      setAuth(true);

      // ✅ Log success message
      console.log("Login Successful. Token:", response.data.token); //s etAuth(true)
    } catch (err) {
      console.error("Login Error:", err.response?.data?.msg || "Server Error");
    }
  };

  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> Developers Hub
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <section className="login-container">
        <h1 className="login-title">Sign In</h1>
        <p className="login-subtitle">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>

        <form
          className="login-form"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register" className="signup-link">
            Sign Up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
