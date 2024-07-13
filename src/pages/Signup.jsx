import signupIMG from "../assets/img/signup.png"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Signup = () => {
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
        })
    }

    const phoneHandler = (e) => {
        setUser({
            ...user,
            phone: e.target.value
        })
    }

    const passwordHandler = (e) => {
        setUser({
            ...user,
            password: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const port = import.meta.env.VITE_API_PORT
        const url = `http://localhost:${port}/api/users `;
        const result = await fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const json = await result.json()
        console.log(json, user)
        if (json.message) {
            setError(json.message);
        } else {
            alert('Registration Successful');
            navigate('/login');
        }
    }

    return (
        <div className="content">
            <div className="login-form">
                <div className="flex justify-center">
                    <img
                        className=" top-img"
                        src={signupIMG}
                        alt="flowers"
                    />
                </div>
                <div className="mt-5 mb-6">
                    <h1 className="text-black text-2xl lg:text-5xl mb-5 md:text-3xl">
                        Welcome to <span className="welcome">Airbnb</span>
                    </h1>
                    <p className="text-black text-xs lg:text-lg md:text-base">
                        Travel far, travel wide, and travel with an open heart.
                        <br />
                        The world is your greatest teacher.
                    </p>
                </div>
                <form className="form-login" action="#" method="post" onSubmit={submitHandler}>
                    <label htmlFor="email" className="m-1 text-xs md:text-base lg:text-lg">
                        Email
                    </label>
                    <input
                        className="md:text-base lg:text-lg text-xs"
                        type="email"
                        name=""
                        placeholder="Example@email.com"
                        required=""
                        autofocus=""
                        value={user.email}
                        onChange={emailHandler}
                    />
                    <label htmlFor="Phone" className="m-1 text-xs md:text-base lg:text-lg">
                        Phone Number
                    </label>
                    <input
                        className="md:text-base lg:text-lg text-xs"
                        type="tel"
                        name=""
                        placeholder="08123456789"
                        pattern="[0-9]+"
                        required=""
                        autofocus=""
                        value={user.phone}
                        onChange={phoneHandler}
                    />
                    <label htmlFor="Password" className="m-1 md:text-base text-xs lg:text-lg">
                        Password
                    </label>
                    <input
                        className="text-xs md:text-base lg:text-lg"
                        type="password"
                        name=""
                        placeholder="At least 8 characters"
                        required=""
                        autofocus=""
                        pattern=".{8,}"
                        title="Eight or more characters"
                        value={user.password}
                        onChange={passwordHandler}
                    />
                    <Link to="../Login"><button className="btn text-xs lg:text-base md:text-sm" type="submit" onClick={submitHandler}>
                        Sign up
                    </button></Link>
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
                    src={signupIMG}
                    alt="landscape"
                />
            </div>
            {/* We’ll call or text you to confirm your number. Standard message and data rates apply. */}
        </div>
    );
}
export default Signup;