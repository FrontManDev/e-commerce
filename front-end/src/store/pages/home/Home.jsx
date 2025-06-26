import './Home.css';
import { NavLink } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { CiDeliveryTruck, CiCreditCard1, CiUndo, CiHeadphones, CiGift, CiBoxes } from "react-icons/ci";

export default function Home() {
    const products = Array(4).fill('-');
    return (
        <div>
            <div className="home-hero">
                <div className="text-hero">
                    <h1>Smart Tech For Smart Lives</h1>
                    <button>SHOP PRODUCT</button>
                </div>
                <img src="./background-img/smartwatch-min.jpg" alt="" />
            </div>
            <div className="products-section">
                <div className="product-category">
                    <div className="title">
                        <h1>Mobile Products</h1>
                        <NavLink>Go The Shop</NavLink>
                    </div>
                    <div className="product-items">
                        {
                            products.map((index) => (
                                <div className="product-item">
                                    <article>
                                        <img src="./background-img/iphone.jpg" alt="" />
                                        <div className="product-buttons">
                                            <button><FaCartPlus /></button>
                                            <button><IoEyeSharp /></button>
                                        </div>
                                    </article>
                                    <div className="product-text">
                                        <h3>Iphone 10</h3>
                                        <h3>980$</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product-category">
                    <div className="title">
                        <h1>Smart-Watch Products</h1>
                        <NavLink>Go The Shop</NavLink>
                    </div>
                    <div className="product-items">
                        {
                            products.map((index) => (
                                <div className="product-item">
                                    <article>
                                        <img src="./background-img/smartwatch-min.jpg" alt="" />
                                        <div className="product-buttons">
                                            <button><FaCartPlus /></button>
                                            <button><IoEyeSharp /></button>
                                        </div>
                                    </article>
                                    <div className="product-text">
                                        <h3>Iphone 10</h3>
                                        <h3>980$</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product-category">
                    <div className="title">
                        <h1>Tablet Products</h1>
                        <NavLink>Go The Shop</NavLink>
                    </div>
                    <div className="product-items">
                        {
                            products.map((index) => (
                                <div className="product-item">
                                    <article>
                                        <img src="./background-img/ipad.jpg" alt="" />
                                        <div className="product-buttons">
                                            <button><FaCartPlus /></button>
                                            <button><IoEyeSharp /></button>
                                        </div>
                                    </article>
                                    <div className="product-text">
                                        <h3>Iphone 10</h3>
                                        <h3>980$</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product-category">
                    <div className="title">
                        <h1>Audio Products</h1>
                        <NavLink>Go The Shop</NavLink>
                    </div>
                    <div className="product-items">
                        {
                            products.map((index) => (
                                <div className="product-item">
                                    <article>
                                        <img src="./background-img/ear-pod.jpg" alt="" />
                                        <div className="product-buttons">
                                            <button><FaCartPlus /></button>
                                            <button><IoEyeSharp /></button>
                                        </div>
                                    </article>
                                    <div className="product-text">
                                        <h3>Iphone 10</h3>
                                        <h3>980$</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="title">
                    <h1>Our Service</h1>
                </div>
                <div className="service-items">
                    <div className="Service-item">
                        <div className="service-heading">
                            <CiDeliveryTruck className="icon" />
                            <h3>Free Shipping</h3>
                        </div>
                        <div className="text-heading">
                            <p>Free worldwide delivery on all orders over $100</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiCreditCard1 className="icon" />
                            <h3>Secure Payment</h3>
                        </div>
                        <div className="text-heading">
                            <p>We accept all major credit cards with 256-bit encryption</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiUndo className="icon" />
                            <h3>Easy Returns</h3>
                        </div>
                        <div className="text-heading">
                            <p>30-day return policy for all unused products</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiHeadphones className="icon" />
                            <h3>24/7 Support</h3>
                        </div>
                        <div className="text-heading">
                            <p>Our customer service team is available around the clock</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiGift className="icon" />
                            <h3>Special Offers</h3>
                        </div>
                        <div className="text-heading">
                            <p>Exclusive deals and discounts for our members</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiBoxes className="icon" />
                            <h3>Quality Guarantee</h3>
                        </div>
                        <div className="text-heading">
                            <p>All our products are carefully inspected before shipping</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiGift className="icon" />
                            <h3>Special Offers</h3>
                        </div>
                        <div className="text-heading">
                            <p>Exclusive deals and discounts for our members</p>
                        </div>
                    </div>

                    <div className="Service-item">
                        <div className="service-heading">
                            <CiBoxes className="icon" />
                            <h3>Quality Guarantee</h3>
                        </div>
                        <div className="text-heading">
                            <p>All our products are carefully inspected before shipping</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo-section">
                <div className="promo-banner">
                    <h2>30% OFF ALL PRODUCTS THIS WEEK ONLY!</h2>
                    <p>Use code: TECH30 at checkout</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}