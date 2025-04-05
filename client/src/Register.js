import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    skill: '',
    password: '',
    confirmpassword: '',
  });

  const [message, setMessage] = useState(''); // To display success/error messages

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // ✅ Validate password match before sending data
    if (data.password !== data.confirmpassword) {
      setMessage('❌ Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/register', data);
      console.log(data)
      setMessage(`✅ ${response.data.msg}`);
    } catch (err) {
      setMessage(`❌ ${err.response?.data?.msg || 'Server Error'}`);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> Developers Hub
          </Link>
        </h1>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login"><b>Login</b></Link></li>
        </ul>
      </nav>

      <section className="container">
        <h1 className="register-title">Sign Up</h1>
        <p className="register-subtitle">
          <i className="fas fa-user"></i> Create Your Account
        </p>

        {message && <p className="message">{message}</p>} {/* Display messages */}

        <form className="form" onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <input type="text" placeholder="Name" name="fullname" onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Mobile Number" name="mobile" onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Skill" name="skill" onChange={changeHandler} />
            <small className="form-text">Please provide skills separated by a comma <b>( , )</b></small>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" onChange={changeHandler} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={changeHandler} required />
          </div>
          <input type="submit" className="btn register-btn" value="Register" />
        </form>

        <p className="register-footer">
          Already have an account? <Link to="/login" className="login-link">Sign In</Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
