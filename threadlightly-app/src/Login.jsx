import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1>Welcome back!</h1>
                <p className="login-intro">Sign in to get to your dashboard</p>
                <form className="login-form">
                    <label className="text1" htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="name@email.com" />

                    <label className="text1" htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" />

                    <button type="submit" className="login-button">Sign in</button>

                    <div className="signup-prompt">
                        Don’t have a Thread Lightly account? <a href="/signup">Sign up now</a>
                    </div>
                </form>
            </div>
            <div className="login-image-container">
                <img src="/src/assets/Picture 9.png" alt="Eco Dress" />
            </div>
        </div>
    );
}

export default Login;