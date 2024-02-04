import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message || 'Invalid email or password'}`);
            }
        } catch (err) {
            alert(`Login request failed: ${err.message}`);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1>Welcome back!</h1>
                <p className="login-intro">Sign in to get to your dashboard</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="text1" htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" />

                    <label className="text1" htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

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