import './Header.css';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header'>

            <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose /> : <CiMenuBurger />}
            </div>

            <h1>Phone-Store</h1>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Products" onClick={() => setMenuOpen(false)}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <CiShoppingCart />
                <CiUser />
            </div>
        </div>
    )
}