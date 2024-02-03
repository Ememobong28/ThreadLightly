import { useState } from 'react'
import './Signup.css'

function Signup() {

    // State for storing form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', email, password);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
export default Signup