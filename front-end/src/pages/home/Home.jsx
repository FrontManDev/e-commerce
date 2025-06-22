import './Home.css';
import { NavLink } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

import { CiDeliveryTruck, CiCreditCard1, CiUndo, CiHeadphones, CiGift, CiBoxes } from "react-icons/ci";
export default function Home() {
    const Mobile = Array(10).fill('-');
    return (
        <div>
            <div className="home-hero">
                <div className="text-hero">
                    <h1>Smart Tech For Smart Lives</h1>
                    <button>SHOP PRODUCT</button>
                </div>
                <img src="./background-img/smartwatch-min.jpg" alt="" />
            </div>
            <div className="service-section">
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
            <div className="products-section">
                <div className="mobile">
                    <div className="title">
                        <h2>Mobile Products</h2>
                        <NavLink>Go The Shop</NavLink>
                    </div>
                    <div className="mobile-items">
                        {
                            Mobile.map((index) => (
                                <div className="mobile-item">
                                    <article>
                                        <img src="./background-img/iphone.jpg" alt="" />
                                        <div className="mobile-buttons">
                                            <button><FaCartPlus /></button>
                                            <button><IoEyeSharp /></button>
                                        </div>
                                    </article>
                                    <div className="mobile-text">
                                        <h3>Iphone 10</h3>
                                        <h3>980$</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}