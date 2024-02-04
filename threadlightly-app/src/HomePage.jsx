import React from 'react'
import './HomePage.css'

function HomePage() {
    return (
        <div className='homepage'>
            <section className="hero">
                <div className="heroText">
                    <h2>Let's Make Green Living Feel Like Home.</h2>
                    <p>Join a community of everyday people taking real steps to protect our planet, together.</p>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/Picture 1.jpeg" alt="Green Living" />
                </div>
            </section>

            <section className="content">
                <div className="content-block">
                    <img src="/src/assets/Picture 3.png" alt="Clothes hanging" className="content-image" />
                </div>
                <div className="content-block">
                    <h2>Who we are</h2>
                    <p>Think of us like your go-to hub for down-to-earth environmentalism. We're not about guilt trips or preaching. We're about empowering individuals like you to take actionable steps that fit your life and make a positive impact on the planet we all call home.</p>
                </div>
            </section>

            <section className="action-section">
                <div className="action-content">
                    <div className="h2">
                        <h2>What if small, everyday actions could truly make a difference?</h2>
                    </div>
                    <p>At thread lightly, we believe they can.</p>
                </div>
            </section>

            <div className="offer-section">
                <h2 className="offer-heading">What we offer</h2>
                <div className="offer-items">
                    <div className="offer-item">
                        <img src="/src/assets/Picture 8.jpeg" alt="Brand Impact Scorecard" />
                        <h3>Brand Impact Scorecard</h3>
                        <p>A system that rates fashion brands on eco and social responsibility, using standards, practices, and transparency.</p>
                        <button className="offer-button">Learn more</button>
                    </div>
                    <div className="offer-item">
                        <img src="/src/assets/Picture 5.webp" alt="Sustainable Swap Shop" />
                        <h3>Sustainable Swap Shop</h3>
                        <p>A platform for trading pre-loved clothes to promote recycling and reduce waste.</p>
                        <button className="offer-button">Learn more</button>
                    </div>
                    <div className="offer-item">
                        <img src="/src/assets/Picture 6.jpeg" alt="Donation Matchmaker" />
                        <h3>Donation Matchmaker</h3>
                        <p>A smart system matching donations with charities by needs and garment type, minimizing waste.</p>
                        <button className="offer-button">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
                    <div className='input-group'>
                        <input type="email" placeholder="Your email" className="newsletter-input" />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
            </div>



        </div>
    )

}
export default HomePage;