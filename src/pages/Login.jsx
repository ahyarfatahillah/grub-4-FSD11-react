import "../assets/styles/login.css";
import React, { useState } from 'react';
import userData from '../mocks/users.json';
import { Link, useNavigate } from 'react-router-dom';
import loginIMG from '../assets/img/login.png';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const emailHandler = (e) => {
    setUser({
      ...user,
      email: e.target.value
    });
  }
  
  const passwordHandler = (e) => {
    setUser({
      ...user,
      password: e.target.value
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await fetch('http://localhost:3001/api/login', {
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const json = await result.json();
    console.log(json, user);
    if (json.message) {
      setError(json.message);
      alert(json.message);
    } else {
      alert('Login Berhasil');
      localStorage.setItem('_token', json.token);
      navigate('/');
    }
  }

  return (
    <div className="content">
      <div className="login-form">
        <div className="flex justify-center">
          <img
            className="top-img"
            src={loginIMG}
            alt="flowers"
          />
        </div>
        <div className="lg:mt-26 mt-5 mb-6">
          <h1 className="text-black text-2xl lg:text-5xl mb-5 md:text-3xl">
            Welcome to <span className="welcome">Airbnb</span>
          </h1>
          <p className="text-black text-xs lg:text-lg md:text-base">
            Travel far, travel wide, and travel with an open heart.
            <br />
            The world is your greatest teacher.
          </p>
        </div>
        <form className="form-login" onSubmit={ submitHandler }>
          <label htmlFor="email" className="m-1 text-xs md:text-base lg:text-lg">
            Email
          </label>
          <input
            className="md:text-base lg:text-lg text-xs"
            type="email"
            placeholder="Example@email.com"
            value={ user.email }
            onChange={ emailHandler }
          />
          <label htmlFor="password" className="m-1 md:text-base text-xs lg:text-lg">
            Password
          </label>
          <input
            className="text-xs md:text-base lg:text-lg"
            type="password"
            placeholder="At least 8 characters"
            value={ user.password }
            onChange={ passwordHandler }
          />
          <div className="text-right mt-2 mb-3 text-xs lg:text-base md:text-sm">
            <a className="blue" href="#">Forgot Password?</a>
          </div>
          <button onClick={ submitHandler } className="btn text-xs lg:text-base md:text-sm" type="submit">
            Sign in
          </button>
          {error && <div className="text-red-500">{error}</div>}
          <p className="text-xs lg:text-base md:text-sm mt-6 account text-center">
            Don't Have An Account? <Link to="/Signup" className="blue"> Sign up </Link>
          </p>
        </form>
         <div className="or-container">
          <h3>or</h3>
          <Link to="/"><button className="btng text-xs lg:text-base md:text-sm" type="submit">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
              alt="#"
            />
            Continue With Facebook
          </button></Link>
          <Link to="/"><button className="btng text-xs lg:text-base md:text-sm" type="submit">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt="#"
            />
            Continue with Google
          </button></Link>
          <Link to="/"><button className="btng text-xs lg:text-base md:text-sm" type="submit">
            <img
              src="https://help.apple.com/assets/6362E41904F57C36D47F1246/6362E41E04F57C36D47F1254/en_US/cfef5ce601689564e0a39b4773f20815.png"
              alt="#"
            />
            Continue with Apple
          </button></Link>
        </div>
      </div>
      <div className="right-img form-img ">
        <img
          src={loginIMG}
          alt="landscape"
        />
      </div>
      {/* We’ll call or text you to confirm your number. Standard message and data rates apply. */}
    </div>
  );
}

export default Login;
