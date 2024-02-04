import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';


function Signup() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        updates: false,
        terms: false,
    });

    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.terms) {
            alert("You must agree to the terms of service.");
            return;
        }
        try {
            const response = await fetch('http://localhost:4001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setShowConfetti(true); // Trigger confetti display
                setTimeout(() => {
                    setShowConfetti(false); // Stop displaying confetti
                    navigate('/login'); // Navigate to the login page
                }, 3000); // Wait for 3 seconds before navigating
                alert("Signup successful!");
            } else {
                const error = await response.json();
                alert(`Signup failed: ${error.message}`);
            }
        } catch (err) {
            alert(`Signup failed: ${err.message}`);
        }
    };

    return (
        <div className="signup-container">
            {showConfetti && <Confetti />}
            <div className="signup-form-container">
                <h1>Welcome to thread lightly!</h1>
                <p className="signup-intro">Sign up to get started</p>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <p className="heading">First Name</p>
                    <input type="text" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter your first name" />

                    <p className="heading">Last Name</p>
                    <input type="text" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Enter your last name" />

                    <p className="heading">Email Address</p>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="name@email.com" />

                    <p className="heading">Password</p>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />

                    <p className="heading">Stay Updated</p>
                    <div className="checkbox-container">
                        <label className="checkbox-label">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="updates" checked={formData.updates} onChange={handleChange} />
                            </div>
                            Yes, I'd like to receive updates and news on sustainable fashion.
                        </label>
                    </div>

                    <p className="heading">Agree to Terms</p>
                    <div className="checkbox-container">
                        <label className="checkbox-label">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} />
                            </div>
                            I agree to the Terms of Service and Privacy Policy.
                        </label>
                    </div>

                    <button type="submit" className="signup-button">Sign up</button>
                </form>
            </div>
            <div className="signup-image-container">
                <img src="/src/assets/Picture 9.png" alt="Eco Dress" />
            </div>
        </div>
    );
}

export default Signup;
