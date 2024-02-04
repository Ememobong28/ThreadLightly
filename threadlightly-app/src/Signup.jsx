import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Signup.css'
import axios from 'axios'

function Signup() {

    // State for storing form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    // submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', {name, email, password})
            .then(result => console.log(result))
                .catch(err => console.log(err))
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div>Already have an Account?</div>
                <div className="login-button">
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default Signup