import React from 'react'
import './dashboard.css'

function Dashboard() {

    const categories = [
        { name: 'Denim', imageUrl: '/src/assets/denim.jpeg' },
        { name: 'Cotton', imageUrl: '/src/assets/shirts.jpeg' },
        { name: 'Sweaters', imageUrl: '/src/assets/sweater.jpeg' },
        { name: 'Cardigans', imageUrl: '/src/assets/cardigans.jpeg' },
        { name: 'Silk', imageUrl: '/src/assets/dress.jpeg' }
    ];

    return (
        <div className="shop-card-container">
            <h2>Shops that support sustainability</h2>
            <p className="local-shops"> <img src="/src/assets/icon1.png" className="icon" style={{ width: '16px', height: '24px', marginBottom: '8px' }} /> Local shops in <span className="brooklyn">Brooklyn</span>  </p>
            <div className="featured-shop">
                <div className="featured-shop-content">
                    <h3>Featured Shop | Universal Threads</h3>
                    <p>Support this newly opened shop in the heart of Brooklyn. Items made from organic, ethically sourced materials.</p>
                    <button className="learn-more-button">Learn More</button>
                </div>
                <div className="featured-shop-image">
                    <img src="/src/assets/Picture 11.jpeg" alt="Featured Shop" />
                </div>
            </div>

            <nav className="category-nav">
                <ul className="category-list">
                    <li className="category-item new">NEW!</li>
                    <li className="category-item">Outerwear</li>
                    <li className="category-item">Bottoms</li>
                    <li className="category-item">Dresses</li>
                    <li className="category-item">Tops</li>
                    <li className="category-item">Totes</li>
                    <li className="category-item">Undergarments</li>
                    <li className="category-item">Accessories</li>
                </ul>
            </nav>

            <div className="category-grid">
                {categories.map((category) => (
                    <div className="category-card" key={category.name}>
                        <img src={category.imageUrl} alt={category.name} className="category-image" />
                        <span className="category-name">{category.name}</span>
                    </div>
                ))}
            </div>

            <div className="eco-friendly-section">
                <img src="/src/assets/Picture 1.jpeg" alt="Eco-friendly background" className="eco-background-image" />
                <div className="eco-content">
                    <h2>Shop guilt-free knowing that our eco-friendly shop finding platform is committed to reducing environmental impact and promoting sustainable practices while supporting local businesses.</h2>
                    <div className="eco-signature">
                        <img src="/src/assets/picture 13.png" alt="Signature" className="eco-signature1" />
                    </div>
                </div>
            </div>

            <div className="ethically-sourced-section">
                <h2>Ethically sourced</h2>
                <p>Good for environment + good for them + good for you</p>
                <div className="products">
                    <div className="product">
                        <img src="/src/assets/Picture 15.webp" alt="Cedar and Sandalwood Hand Soap" className="product-img" />
                        <h3>Alpine Provisions | Cedar + Sandalwood Hand Soap</h3>
                        <p className="price">$7.99</p>
                        <p className="supplier">Earthly Friends</p>
                    </div>

                    <div className="product">
                        <img src="/src/assets/Picture 16.jpeg" alt="Women's Classic Sole Low Back Wool Slippers" className="product-img" />
                        <h3>Women's Classic Sole Low Back Wool Slippers</h3>
                        <p className="price">$23.99</p>
                        <p className="supplier">Hand and Heart</p>
                    </div>

                    <div className="product">
                        <img src="/src/assets/Picture 16.webp" alt="Large Patterned Hamper Basket" className="product-img" />
                        <h3>Large Patterned Hamper Basket</h3>
                        <p className="price">$75.00</p>
                        <p className="supplier">Boho Babes</p>
                    </div>

                    <div className="product">
                        <img src="/src/assets/Picture 17.webp" alt="Meliora | Eco Laundry Powder" className="product-img" />
                        <h3>Meliora | Eco Laundry Powder</h3>
                        <p className="price">$16.79</p>
                        <p className="supplier">Difference and Define</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;