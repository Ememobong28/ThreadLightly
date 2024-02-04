import './Signup.css';

function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h1>Welcome to thread lightly!</h1>
                <p className="signup-intro">Sign up to get started</p>
                <form className="signup-form">
                    <p className="heading">First Name</p>
                    <input type="text" id="fname" placeholder="Enter your first name" />

                    <p className="heading">Last Name</p>
                    <input type="text" id="lname" placeholder="Enter your last name" />

                    <p className="heading">Email Address</p>
                    <input type="email" id="email" placeholder="name@email.com" />

                    <p className="heading">Password</p>
                    <input type="password" id="password" placeholder="Enter Password" />

                    <p className="heading">Stay Updated</p>
                    <div className="checkbox-container">
                        <label className="checkbox-label">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="updates" />
                                <span></span>
                            </div>
                            Yes, I'd like to receive updates and news on sustainable fashion.
                        </label>
                    </div>

                    <p className="heading">Agree to Terms</p>
                    <div className="checkbox-container">
                        <label className="checkbox-label">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="terms" />
                                <span></span>
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
