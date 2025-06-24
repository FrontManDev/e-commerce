import { useEffect, useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import './Product.css';

export default function Product() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts([
            {
                id: 1,
                src: "./background-img/ear-pod.jpg",
                title: "Wireless Earbuds",
                price: 500
            },
            {
                id: 2,
                src: "./background-img/ipad.jpg",
                title: "iPad Pro",
                price: 800
            },
            {
                id: 3,
                src: "./background-img/iphone.jpg",
                title: "iPhone 15",
                price: 1000
            },
            {
                id: 4,
                src: "./background-img/smartwatch-min.jpg",
                title: "Smart Watch",
                price: 300
            },
        ]);
    }, []);

    return (
        <div className='products-container'>
            <div className="hero-banner">
                <img src="./background-img/background.jpg" alt="Tech Products" />
                <h1>Discover Latest Tech Products In Our Store</h1>
            </div>
            <div className="products-layout">
                <aside className="filter-sidebar">
                    <form className="filter-form">
                        <div className="filter-section">
                            <label htmlFor="category-filter">Filter by Category</label>
                            <select id="category-filter">
                                <option value="all">All Products</option>
                                <option value="mobile">Smartphones</option>
                                <option value="laptop">Laptops</option>
                                <option value="tablet">Tablets</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        
                        <div className="filter-section">
                            <label htmlFor="price-sort">Sort by Price</label>
                            <select id="price-sort">
                                <option value="default">Default</option>
                                <option value="price-high-low">High to Low</option>
                                <option value="price-low-high">Low to High</option>
                            </select>
                        </div>

                        <fieldset className="filter-section checkbox-group">
                            <legend>Product Status</legend>
                            <div className="checkbox-option">
                                <input type="checkbox" id="new-products" />
                                <label htmlFor="new-products">New Arrivals</label>
                            </div>
                            <div className="checkbox-option">
                                <input type="checkbox" id="limited-edition" />
                                <label htmlFor="limited-edition">Limited Edition</label>
                            </div>
                            <div className="checkbox-option">
                                <input type="checkbox" id="discounted" />
                                <label htmlFor="discounted">Discounted Items</label>
                            </div>
                        </fieldset>

                        <button type="submit" className="filter-button">
                            Apply Filters
                        </button>
                    </form>
                </aside>
                <main className="products-grid">
                    <section className="category-section">
                        <h2 className="category-title">Mobile Devices</h2>
                        <div className="products-row">
                            {products.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <div className="product-image">
                                        <img src={product.src} alt={product.title} />
                                        <div className="product-actions">
                                            <button aria-label="Add to cart"><FaCartPlus /></button>
                                            <button aria-label="View details"><IoEyeSharp /></button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.title}</h3>
                                        <p className="product-price">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}