import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiShoppingBag, FiPackage, FiList, FiLogOut } from 'react-icons/fi';
import { FaStore } from "react-icons/fa6";
import './SideBar.css';

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <h1 className="sidebar-title">
                Dashboard
            </h1>
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <NavLink to="/" className="sidebar-link" activeClassName="active">
                        <FiHome className="sidebar-icon" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/users" className="sidebar-link" activeClassName="active">
                        <FiUsers className="sidebar-icon" />
                        <span>Users</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/orders" className="sidebar-link" activeClassName="active">
                        <FiShoppingBag className="sidebar-icon" />
                        <span>Orders</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/products" className="sidebar-link" activeClassName="active">
                        <FiPackage className="sidebar-icon" />
                        <span>Products</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/category" className="sidebar-link" activeClassName="active">
                        <FiList className="sidebar-icon" />
                        <span>Category</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/category" className="sidebar-link" activeClassName="active">
                        <FaStore className="sidebar-icon" />
                        <span>Store</span>
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/logout" className="sidebar-link" activeClassName="active">
                        <FiLogOut className="sidebar-icon" />
                        <span>Exit</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}